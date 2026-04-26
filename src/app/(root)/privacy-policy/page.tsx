import { Metadata } from "next";
import PrivacyPolicyContent from "./PrivacyPolicyContent";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read the Privacy Policy of Promise Assets to understand how we collect, use, and protect your personal information.",
};

const PrivacyPolicyPage = () => {
  return <PrivacyPolicyContent />;
};

export default PrivacyPolicyPage;
