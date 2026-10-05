"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import {
  Calendar,
  X,
  MapPin,
  Building2,
  Users,
  UserPlus,
  Trash2,
  Loader2,
  ChevronDown,
  CheckCircle2,
  Printer,
  Download,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { siteVisitService } from "@/services/site-visit.service";
import type { AvailableSlot, BookSiteVisitRequest, Project } from "@/types/api";
import { useSettings } from "@/providers/SettingsProvider";
import { toast } from "sonner";
import { openSiteVisitSlip, type SlipBookingData } from "./slip-utils";

interface BookSiteVisitModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProjectId?: number;
}

interface VisitorItem {
  name: string;
  mobile_number: string;
}

const inputCls =
  "w-full bg-slate-50 dark:bg-[#131722] border border-slate-200 dark:border-[#232a3b] focus:border-primary/80 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none transition";
const selectCls = `${inputCls} appearance-none cursor-pointer pr-10 disabled:opacity-50 disabled:cursor-not-allowed`;
const labelCls = "block text-xs font-semibold text-slate-700 dark:text-slate-300";

export default function BookSiteVisitModal({
  isOpen,
  onClose,
  initialProjectId,
}: BookSiteVisitModalProps) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);
  const [isLoadingProjects, setIsLoadingProjects] = useState(false);

  const [visitDate, setVisitDate] = useState("");
  const [availableSlots, setAvailableSlots] = useState<AvailableSlot[]>([]);
  const [selectedSlotKey, setSelectedSlotKey] = useState("");
  const [isLoadingSlots, setIsLoadingSlots] = useState(false);

  const settings = useSettings();
  const officeAddress =
    settings?.general_settings?.site_address ||
    "Khaja Super Market, 2nd to 7th Floor, Kallyanpur Bus Stop, Mirpur Road, Dhaka-1207";

  const [pickupType, setPickupType] = useState<1 | 2 | null>(null);
  const [customPickupAddress, setCustomPickupAddress] = useState("");

  const [visitors, setVisitors] = useState<VisitorItem[]>([
    { name: "", mobile_number: "" },
  ]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [confirmedData, setConfirmedData] = useState<SlipBookingData | null>(null);

  // Filter valid API slots for current visit date
  const filteredSlots = useMemo(() => {
    return availableSlots.filter(
      (s) =>
        !s.is_custom &&
        s.name &&
        s.time !== "Select Time" &&
        (!visitDate || !s.date || s.date === visitDate)
    );
  }, [availableSlots, visitDate]);

  // Reset form on open
  useEffect(() => {
    if (isOpen) {
      setIsSuccess(false);
      setConfirmedData(null);
      setSelectedProjectId(initialProjectId ?? null);
      setVisitDate("");
      setSelectedSlotKey("");
      setPickupType(null);
      setCustomPickupAddress("");
      setVisitors([{ name: "", mobile_number: "" }]);
    }
  }, [isOpen, initialProjectId]);

  // Load projects
  useEffect(() => {
    if (!isOpen) return;
    let isMounted = true;
    (async () => {
      setIsLoadingProjects(true);
      try {
        const res = await siteVisitService.getProjects();
        if (isMounted && res?.data && Array.isArray(res.data)) {
          setProjects(res.data);
          if (initialProjectId) setSelectedProjectId(initialProjectId);
        }
      } catch (err) {
        console.error("Failed to load projects:", err);
      } finally {
        if (isMounted) setIsLoadingProjects(false);
      }
    })();
    return () => {
      isMounted = false;
    };
  }, [isOpen, initialProjectId]);

  // Fetch slots when project or date changes
  const fetchSlots = useCallback(async (projId: number, date?: string) => {
    setIsLoadingSlots(true);
    setSelectedSlotKey("");
    try {
      const res = await siteVisitService.getAvailableSlots(projId, date || undefined, 10);
      setAvailableSlots(res.slots || []);
    } catch (err) {
      console.warn("Could not fetch slots:", err);
      setAvailableSlots([]);
    } finally {
      setIsLoadingSlots(false);
    }
  }, []);

  useEffect(() => {
    if (isOpen && selectedProjectId) {
      fetchSlots(selectedProjectId, visitDate);
    }
  }, [isOpen, selectedProjectId, visitDate, fetchSlots]);

  // Deselect slot if no longer present in filtered slots
  useEffect(() => {
    if (selectedSlotKey && !filteredSlots.some((s) => `api-${s.id}` === selectedSlotKey)) {
      setSelectedSlotKey("");
    }
  }, [filteredSlots, selectedSlotKey]);

  // Visitor handlers
  const addVisitor = () => {
    if (visitors.length >= 10) return toast.warning("Maximum 10 visitors allowed.");
    setVisitors((prev) => [...prev, { name: "", mobile_number: "" }]);
  };

  const removeVisitor = (idx: number) => {
    if (idx === 0) return;
    setVisitors((prev) => prev.filter((_, i) => i !== idx));
  };

  const updateVisitor = (idx: number, field: keyof VisitorItem, val: string) => {
    setVisitors((prev) => {
      const next = [...prev];
      next[idx] = { ...next[idx], [field]: val };
      return next;
    });
  };

  const handleVisitorCountChange = (count: number) => {
    setVisitors((prev) => {
      if (count === prev.length) return prev;
      if (count > prev.length) {
        return [
          ...prev,
          ...Array.from({ length: count - prev.length }, () => ({
            name: "",
            mobile_number: "",
          })),
        ];
      }
      return prev.slice(0, count);
    });
  };

  // Submit booking
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedProjectId) return toast.error("Please select a project.");
    if (!visitDate) return toast.error("Please choose a visit date.");
    if (!selectedSlotKey) {
      return toast.error(
        filteredSlots.length === 0
          ? "This time slot not available"
          : "Please select an available time slot."
      );
    }
    if (!pickupType) return toast.error("Please select a pick-up location.");
    if (pickupType === 1 && !customPickupAddress.trim()) {
      return toast.error("Please enter a custom pickup address.");
    }

    for (let i = 0; i < visitors.length; i++) {
      if (!visitors[i].name.trim()) return toast.error(`Please enter name for visitor #${i + 1}.`);
      if (!visitors[i].mobile_number.trim()) return toast.error(`Please enter mobile number for visitor #${i + 1}.`);
    }

    const apiSlotId = Number(selectedSlotKey.replace("api-", ""));
    const foundSlot = availableSlots.find((s) => s.id === apiSlotId);
    if (!foundSlot) return toast.error("Please select a valid time slot.");

    const slotName = `${foundSlot.name} (${foundSlot.time})`;
    const payload: BookSiteVisitRequest = {
      project_id: selectedProjectId,
      visit_date: visitDate,
      slot_name: slotName,
      time_slot_id: foundSlot.id,
      custom_time: null,
      is_custom_slot: false,
      pickup_type: pickupType,
      custom_pickup_address: pickupType === 1 ? customPickupAddress.trim() : officeAddress,
      visitors: visitors.map((v, idx) => ({
        name: v.name.trim(),
        mobile_number: v.mobile_number.trim(),
        is_primary: (idx === 0 ? 1 : 0) as 0 | 1,
      })),
    };

    setIsSubmitting(true);
    try {
      const response = await siteVisitService.bookSiteVisit(payload);
      const resData = (response as { data?: { id?: number | string; booking_id?: string } })?.data;
      const bookingRef = resData?.id
        ? `PV-${String(resData.id).padStart(5, "0")}`
        : resData?.booking_id
        ? String(resData.booking_id)
        : `PV-${Date.now().toString().slice(-6)}`;

      const matched = projects.find((p) => p.id === selectedProjectId);
      setConfirmedData({
        bookingRef,
        projectName: matched?.name || "Selected Project",
        date: visitDate,
        slot: slotName,
        pickup: pickupType === 1 ? customPickupAddress.trim() : `Office: ${officeAddress}`,
        visitors: visitors.map((v) => ({ name: v.name.trim(), mobile_number: v.mobile_number.trim() })),
        createdAt: new Date().toLocaleString("en-US", { dateStyle: "medium", timeStyle: "short" }),
      });

      setIsSuccess(true);
      toast.success(response.message || "Site visit booked successfully!");
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : "Failed to book site visit.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setConfirmedData(null);
    setSelectedProjectId(initialProjectId ?? null);
    setVisitDate("");
    setSelectedSlotKey("");
    setPickupType(null);
    setCustomPickupAddress("");
    setVisitors([{ name: "", mobile_number: "" }]);
  };

  const handleSlipAction = () => {
    if (!confirmedData) return;
    openSiteVisitSlip(
      confirmedData,
      officeAddress,
      settings?.general_settings?.site_name,
      settings?.general_settings?.site_phone
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && (setIsSuccess(false), onClose())}>
      <DialogContent
        className="max-w-[620px] w-full p-0 bg-white dark:bg-[#0e131d] border border-slate-200 dark:border-[#222a3d] text-slate-900 dark:text-white shadow-2xl rounded-2xl overflow-hidden [&>button]:hidden sm:max-w-[620px]"
        showCloseButton={false}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-slate-100 dark:border-[#1c2436]/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-primary shrink-0">
              <Calendar className="w-5 h-5 text-primary" />
            </div>
            <div>
              <DialogTitle className="text-base font-bold text-slate-900 dark:text-white">
                Book Site Visit
              </DialogTitle>
              <DialogDescription className="text-xs text-slate-500 mt-0.5">
                Select project, date, pick-up &amp; visitor details
              </DialogDescription>
            </div>
          </div>
          <button
            type="button"
            onClick={() => (setIsSuccess(false), onClose())}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-600 dark:text-slate-400 flex items-center justify-center transition cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Success View */}
        {isSuccess && confirmedData ? (
          <div className="px-6 py-8 text-center space-y-5">
            <div className="w-14 h-14 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center mx-auto text-primary">
              <CheckCircle2 className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Site Visit Confirmed!</h3>
              <p className="text-xs text-slate-500 mt-1">
                Your request has been received. Our team will contact you shortly.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-[#131823] border border-slate-200 dark:border-[#232a3b] rounded-xl p-4 text-left text-xs space-y-2 max-w-md mx-auto">
              {[
                ["Booking Ref:", confirmedData.bookingRef, true],
                ["Project:", confirmedData.projectName],
                ["Date:", confirmedData.date],
                ["Time Slot:", confirmedData.slot],
                ["Pick-up:", confirmedData.pickup],
                ["Visitors:", `${confirmedData.visitors.length} ${confirmedData.visitors.length > 1 ? "Persons" : "Person"}`],
              ].map(([label, val, isBold]) => (
                <div key={label as string} className="flex justify-between border-b border-slate-200 dark:border-[#232a3b] pb-1.5 last:border-b-0 last:pb-0">
                  <span className="text-slate-500">{label}</span>
                  <span className={`font-semibold ${isBold ? "text-primary font-mono font-bold" : "text-slate-900 dark:text-white"}`}>
                    {val}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2.5 justify-center pt-2">
              <button
                type="button"
                onClick={handleSlipAction}
                className="px-4 py-2 rounded-xl bg-primary hover:bg-primary/90 text-black text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>Print Slip</span>
              </button>
              <button
                type="button"
                onClick={handleSlipAction}
                className="px-4 py-2 rounded-xl border border-primary/50 text-primary hover:bg-primary/10 text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="px-4 py-2 rounded-xl border border-slate-200 dark:border-[#232a3b] text-slate-600 dark:text-slate-300 text-xs font-semibold hover:bg-slate-100 dark:hover:bg-white/5 transition cursor-pointer"
              >
                Book Another
              </button>
              <button
                type="button"
                onClick={() => (setIsSuccess(false), onClose())}
                className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 text-slate-800 dark:text-white text-xs font-semibold transition cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          /* Form View */
          <form onSubmit={handleSubmit} className="px-6 py-5 space-y-4 max-h-[calc(88vh-90px)] overflow-y-auto">
            {/* Project Select */}
            <div className="space-y-1">
              <label className={labelCls}>
                Project <span className="text-primary">*</span>
              </label>
              <div className="relative">
                <select
                  value={selectedProjectId ?? ""}
                  onChange={(e) => {
                    setSelectedProjectId(e.target.value ? Number(e.target.value) : null);
                    setSelectedSlotKey("");
                  }}
                  disabled={isLoadingProjects}
                  className={selectCls}
                  required
                >
                  <option value="" disabled className="text-slate-400">
                    {isLoadingProjects ? "Loading projects..." : "Select a project"}
                  </option>
                  {projects.map((proj) => (
                    <option key={proj.id} value={proj.id} className="bg-white dark:bg-[#131722] text-slate-900 dark:text-white">
                      {proj.name}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Visit Date & Time Slot (2 Columns) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {/* Visit Date */}
              <div className="space-y-1">
                <label className={labelCls}>
                  Visit Date <span className="text-primary">*</span>
                </label>
                <input
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                  value={visitDate}
                  onChange={(e) => setVisitDate(e.target.value)}
                  className={`${inputCls} dark:[color-scheme:dark]`}
                  required
                />
              </div>

              {/* Time Slot */}
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <label className={labelCls}>
                    Time Slot <span className="text-primary">*</span>
                  </label>
                  {isLoadingSlots && (
                    <span className="text-[10px] text-primary flex items-center gap-1">
                      <Loader2 className="w-2.5 h-2.5 animate-spin" /> Loading...
                    </span>
                  )}
                </div>
                <div className="relative">
                  <select
                    value={selectedSlotKey}
                    onChange={(e) => setSelectedSlotKey(e.target.value)}
                    disabled={isLoadingSlots || !selectedProjectId || !visitDate || filteredSlots.length === 0}
                    className={selectCls}
                    required
                  >
                    <option value="" disabled className="text-slate-400">
                      {!selectedProjectId
                        ? "Select a project first"
                        : !visitDate
                        ? "Select visit date first"
                        : isLoadingSlots
                        ? "Loading slots..."
                        : filteredSlots.length === 0
                        ? "This time slot not available"
                        : "Select Time Slot"}
                    </option>
                    {filteredSlots.map((slot) => (
                      <option
                        key={`api-${slot.id}`}
                        value={`api-${slot.id}`}
                        className="bg-white dark:bg-[#131722] text-slate-900 dark:text-white"
                      >
                        {slot.name} ({slot.time})
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
                {selectedProjectId && visitDate && !isLoadingSlots && filteredSlots.length === 0 && (
                  <p className="text-[11px] text-amber-600 dark:text-amber-400 pl-1 font-medium">
                    This time slot not available
                  </p>
                )}
              </div>
            </div>

            {/* Pick-up Location */}
            <div className="space-y-2">
              <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-primary" />
                <span>Pick-up Location</span>
                <span className="text-primary">*</span>
              </label>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { type: 2 as const, label: "Office", desc: "Promise Assets HQ", Icon: Building2 },
                  { type: 1 as const, label: "Another", desc: "Custom Address", Icon: MapPin },
                ].map(({ type, label, desc, Icon }) => {
                  const isSelected = pickupType === type;
                  return (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setPickupType(type)}
                      className={`p-3 rounded-xl border flex items-center gap-3 text-left transition cursor-pointer ${
                        isSelected
                          ? "border-primary bg-primary/10 ring-1 ring-primary/40"
                          : "border-slate-200 dark:border-[#232a3b] bg-slate-50 dark:bg-[#131722] hover:border-slate-300"
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                          isSelected ? "border-primary" : "border-slate-400"
                        }`}
                      >
                        {isSelected && <div className="w-2 h-2 rounded-full bg-primary" />}
                      </div>
                      <div>
                        <div className="text-xs font-bold flex items-center gap-1.5 text-slate-900 dark:text-white">
                          <Icon className="w-3.5 h-3.5 text-primary" />
                          <span>{label}</span>
                        </div>
                        <p className="text-[11px] text-slate-500 mt-0.5">{desc}</p>
                      </div>
                    </button>
                  );
                })}
              </div>

              {pickupType === 2 && (
                <div className="relative flex items-center">
                  <input
                    type="text"
                    readOnly
                    value={officeAddress}
                    title={officeAddress}
                    className={`${inputCls} bg-slate-100 dark:bg-[#131722] text-xs cursor-default pr-10`}
                  />
                  <Building2 className="w-4 h-4 text-primary absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              )}

              {pickupType === 1 && (
                <input
                  type="text"
                  value={customPickupAddress}
                  onChange={(e) => setCustomPickupAddress(e.target.value)}
                  placeholder="Enter custom pickup address (e.g. Uttara, Dhaka)"
                  className={inputCls}
                  required
                />
              )}
            </div>

            {/* Visitors Header */}
            <div className="space-y-2.5 pt-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200">
                    Visitors
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <select
                      value={visitors.length}
                      onChange={(e) => handleVisitorCountChange(Number(e.target.value))}
                      className="appearance-none bg-slate-50 dark:bg-[#131722] border border-slate-200 dark:border-[#232a3b] rounded-lg px-2.5 py-1 text-xs text-slate-900 dark:text-white pr-6 cursor-pointer focus:outline-none"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                        <option key={n} value={n} className="bg-white dark:bg-[#131722] text-slate-900 dark:text-white">
                          {n} {n === 1 ? "Person" : "Persons"}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="w-3 h-3 text-slate-400 absolute right-1.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                  <button
                    type="button"
                    onClick={addVisitor}
                    disabled={visitors.length >= 10}
                    className="border border-primary/40 bg-primary/10 hover:bg-primary/20 text-primary text-xs font-semibold px-2.5 py-1 rounded-lg flex items-center gap-1 transition cursor-pointer disabled:opacity-40"
                  >
                    <UserPlus className="w-3.5 h-3.5" />
                    <span>+ Add</span>
                  </button>
                </div>
              </div>

              {/* Visitors List */}
              <div className="space-y-2">
                {visitors.map((v, i) => (
                  <div
                    key={i}
                    className={`rounded-xl p-3 border transition ${
                      i === 0
                        ? "bg-primary/[0.04] dark:bg-[#131823]/80 border-primary/40"
                        : "bg-slate-50 dark:bg-[#131823]/50 border-slate-200 dark:border-[#232a3b]"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-xs font-semibold ${i === 0 ? "text-primary font-bold" : "text-slate-700 dark:text-slate-300"}`}>
                        {i === 0 ? "Primary Visitor" : `Visitor #${i + 1}`}
                      </span>
                      {i !== 0 && (
                        <button
                          type="button"
                          onClick={() => removeVisitor(i)}
                          className="text-xs text-slate-400 hover:text-red-500 flex items-center gap-1 cursor-pointer transition"
                        >
                          <Trash2 className="w-3 h-3" />
                          <span>Remove</span>
                        </button>
                      )}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <input
                        type="text"
                        value={v.name}
                        onChange={(e) => updateVisitor(i, "name", e.target.value)}
                        placeholder={i === 0 ? "Full Name *" : `Visitor ${i + 1} Name *`}
                        className="w-full bg-white dark:bg-[#0e121a] border border-slate-200 dark:border-[#242c3e] rounded-lg px-3 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-primary/80"
                        required
                      />
                      <input
                        type="tel"
                        value={v.mobile_number}
                        onChange={(e) => updateVisitor(i, "mobile_number", e.target.value)}
                        placeholder="Mobile Number *"
                        className="w-full bg-white dark:bg-[#0e121a] border border-slate-200 dark:border-[#242c3e] rounded-lg px-3 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-primary/80"
                        required
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-black font-bold uppercase tracking-wider py-3 px-6 rounded-xl transition flex items-center justify-center gap-2 shadow-lg shadow-primary/20 cursor-pointer disabled:opacity-50 text-sm"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Booking Site Visit...</span>
                  </>
                ) : (
                  <>
                    <Calendar className="w-4 h-4" />
                    <span>CONFIRM VISIT ({visitors.length} {visitors.length > 1 ? "VISITORS" : "VISITOR"})</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
