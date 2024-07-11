'use client'
import React from 'react';

const UserManual = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">User Manual for Invoice Generation Application</h1>
      <p className="mb-6">Welcome to our Invoice Generation Application! This guide will help you understand how to use the application to create and customize your invoices easily.</p>

      <Section title="Getting Started">
        <Step number="1" description="Click on the 'Upload' button to add your company logo to the invoice." />
      </Section>

      <Section title="Filling Out Invoice Details">
        <Step number="2" description="Enter your company or your name in the provided field." />
        <Step number="3" description="Fill in the name of the person or company you are invoicing." />
        <Step number="4" description="If applicable, enter the name of the person or company to whom the items/services are being shipped." />
        <Step number="5" description="Select the date of the invoice by clicking on the calendar icon and choosing the appropriate date." />
        <Step number="6" description="Specify the payment terms (e.g., Net 30 days, Due on receipt) in this field." />
        <Step number="7" description="Select the due date for the payment using the calendar icon." />
        <Step number="8" description="Enter the Purchase Order (PO) number if available." />
      </Section>

      <Section title="Adding Invoice Items">
        <Step number="9" description="In the 'Item' section, describe the item or service being billed. Enter the quantity and rate for each item. The amount will be calculated automatically." />
        <Step number="10" description="Click on 'Add Line Item' to include additional items or services in your invoice." />
        <Step number="11" description="If you need to remove all items and start over, click on 'Reset Items.'" />
      </Section>

      <Section title="Additional Information">
        <Step number="12" description="Add any relevant information or special instructions in the 'Notes' section." />
        <Step number="13" description="Specify any terms and conditions, such as late fees, payment methods, or delivery schedules." />
      </Section>

      <Section title="Summary and Totals">
        <Step number="14" description="If applicable, click on the '+ Discount,' '+ Tax,' and '+ Shipping' buttons to add these details to your invoice." />
        <Step number="15" description="Enter any amount already paid by the customer to reflect the balance due." />
        <Step number="16" description="Select the desired currency from the dropdown menu on the right side." />
      </Section>

      <Section title="Finalizing the Invoice">
        <Step number="17" description="Once all details are filled out, click on the 'Download' button to generate and save your invoice." />
        <Step number="18" description="If you need to clear all fields and start over, click on the 'Reset' button at the bottom." />
      </Section>

      <h2 className="text-xl font-bold mt-6 mb-4">Tips for Using the Application</h2>
      <ul className="list-disc list-inside mb-6">
        <li>Ensure all mandatory fields are filled out to avoid any errors.</li>
        <li>Double-check all entered information for accuracy before downloading the invoice.</li>
        <li>Use the Notes and Terms sections to provide any additional important details to your clients.</li>
      </ul>
      <p>We hope this manual helps you make the most out of our Invoice Generation Application. For any further assistance, please contact our support team.</p>
    </div>
  );
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-6">
    <h2 className="text-xl font-bold mb-4">{title}</h2>
    <div className="space-y-2">{children}</div>
  </div>
);

const Step = ({ number, description }: { number: string; description: string }) => (
  <div className="flex items-start">
    <span className="font-bold text-lg w-8">{number}</span>
    <p>{description}</p>
  </div>
);

export default UserManual;
