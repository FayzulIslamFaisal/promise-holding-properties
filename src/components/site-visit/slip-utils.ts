export interface SlipBookingData {
  bookingRef: string;
  projectName: string;
  date: string;
  slot: string;
  pickup: string;
  visitors: Array<{ name: string; mobile_number: string }>;
  createdAt: string;
}

export function openSiteVisitSlip(
  data: SlipBookingData,
  officeAddress: string,
  siteName = "Promise Assets",
  sitePhone = "09647 444 444 | 01958 063 331"
) {
  const visitorsRows = data.visitors
    .map(
      (v, i) => `
      <tr>
        <td style="color:#64748b;font-weight:700;">#${i + 1}</td>
        <td style="font-weight:700;">${v.name}</td>
        <td style="font-family:monospace;">${v.mobile_number}</td>
        <td style="text-align:right;">${
          i === 0
            ? '<span style="background:#e0f2fe;color:#0369a1;padding:2px 6px;border-radius:4px;font-size:10px;font-weight:700;">Primary</span>'
            : '<span style="background:#f1f5f9;color:#64748b;padding:2px 6px;border-radius:4px;font-size:10px;">Guest</span>'
        }</td>
      </tr>`
    )
    .join("");

  const htmlContent = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Site_Visit_Slip_${data.bookingRef}</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; font-family: system-ui, -apple-system, sans-serif; }
    body { background: #f8fafc; color: #0f172a; padding: 16px; font-size: 12px; }
    .card { max-width: 440px; margin: 0 auto; background: #fff; border: 1px solid #cbd5e1; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 14px rgba(0,0,0,0.06); }
    .head { background: #0f172a; color: #fff; padding: 14px 18px; border-bottom: 3px solid #c59a3f; display: flex; justify-content: space-between; align-items: center; }
    .meta { background: #f8fafc; padding: 8px 18px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #e2e8f0; font-size: 11px; }
    .body { padding: 14px 18px; }
    table { width: 100%; border-collapse: collapse; margin-bottom: 12px; font-size: 11.5px; }
    th, td { padding: 6px 8px; border-bottom: 1px solid #f1f5f9; text-align: left; }
    th { color: #64748b; font-weight: 600; width: 30%; }
    .guide { background: #fffbeb; border: 1px solid #fef3c7; border-radius: 6px; padding: 8px 12px; font-size: 10px; color: #92400e; line-height: 1.5; margin-bottom: 12px; }
    .actions { max-width: 440px; margin: 0 auto 10px; display: flex; justify-content: center; gap: 8px; }
    .btn { padding: 6px 14px; border-radius: 6px; font-size: 11px; font-weight: 700; border: none; cursor: pointer; }
    @media print {
      body { background: #fff; padding: 0; }
      .card { border: 1px solid #cbd5e1; box-shadow: none; max-width: 100%; }
      .actions { display: none !important; }
    }
  </style>
</head>
<body>
  <div class="actions">
    <button class="btn" style="background:#c59a3f;color:#000;" onclick="window.print()">🖨️ Print / Save as PDF</button>
    <button class="btn" style="background:#334155;color:#fff;" onclick="window.close()">✕ Close</button>
  </div>
  <div class="card">
    <div class="head">
      <div>
        <div style="font-size:16px;font-weight:800;">${siteName} <span style="color:#c59a3f;">Properties</span></div>
        <div style="font-size:9.5px;color:#94a3b8;text-transform:uppercase;">Site Visit Booking Pass</div>
      </div>
      <div style="text-align:right;font-size:9.5px;color:#cbd5e1;">
        <div><strong>Hotline:</strong> ${sitePhone}</div>
      </div>
    </div>
    <div class="meta">
      <div>REF: <strong style="font-family:monospace;font-size:12px;">${data.bookingRef}</strong></div>
      <div><span style="background:#c59a3f;color:#000;font-weight:800;padding:2px 6px;border-radius:4px;font-size:9px;">CONFIRMED</span> <span style="color:#64748b;font-size:10px;">${data.createdAt}</span></div>
    </div>
    <div class="body">
      <table>
        <tr><th>Project</th><td style="color:#c59a3f;font-weight:700;">${data.projectName}</td></tr>
        <tr><th>Date</th><td>${data.date}</td></tr>
        <tr><th>Time Slot</th><td>${data.slot}</td></tr>
        <tr><th>Pick-up</th><td>${data.pickup}</td></tr>
      </table>
      <div style="font-size:10px;font-weight:700;color:#475569;text-transform:uppercase;margin-bottom:6px;">Visitors (${data.visitors.length})</div>
      <table>
        <thead>
          <tr style="background:#f8fafc;font-size:9.5px;color:#64748b;text-transform:uppercase;">
            <th style="width:10%;">#</th><th style="width:45%;">Name</th><th style="width:30%;">Mobile</th><th style="width:15%;text-align:right;">Role</th>
          </tr>
        </thead>
        <tbody>${visitorsRows}</tbody>
      </table>
      <div class="guide">
        <strong>Important Guidelines:</strong>
        <ol style="margin-left:14px;margin-top:2px;">
          <li>Please arrive at the pick-up location 15 mins prior to departure.</li>
          <li>Our coordinator will call your mobile number before arrival.</li>
          <li>For queries or rescheduling, call hotline: ${sitePhone}.</li>
        </ol>
      </div>
      <div style="border-top:1px dashed #cbd5e1;padding-top:8px;display:flex;justify-content:space-between;font-size:9px;color:#64748b;">
        <div>Official Booking Pass • No signature required</div>
        <div>${siteName}</div>
      </div>
    </div>
  </div>
  <script>
    window.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => window.print(), 350);
    });
  </script>
</body>
</html>`;

  const slipWin = window.open("", "_blank", "width=500,height=700");
  if (slipWin) {
    slipWin.document.open();
    slipWin.document.write(htmlContent);
    slipWin.document.close();
    slipWin.focus();
  }
}
