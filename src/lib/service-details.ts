import type { Service } from './services';

type Details = {
  process: readonly [string, string][];
  deliverables: readonly string[];
  checks: readonly string[];
  limits: string;
  faqs: readonly [string, string][];
};

// Guidance for agreeing a scope, not a statement of certified capability.
export const serviceDetails: Record<Service['slug'], Details> = {
  'pcb-assembly': {
    process: [['Review the build pack', 'Identify the board revision, assembly drawings, placement data and BOM to use for the build. Flag conflicting revisions and missing part numbers.'], ['Agree supply and assembly', 'Separate customer-supplied boards and parts from sourcing requirements. Identify SMT, through-hole and mixed-technology stages in the brief.'], ['Define acceptance', 'Specify inspection, functional-test requirements and the documentation needed at handoff before confirming the build.']],
    deliverables: ['An agreed board revision and assembly scope', 'A component-responsibility list and approved substitutions', 'Inspection, test and handoff documentation requirements'],
    checks: ['Component orientation and polarity requirements', 'Assembly drawing and BOM consistency', 'Test procedure, fixtures and pass/fail criteria'],
    limits: 'Board complexity, package types, quantities and turnaround require review. Do not assume automated inspection, electrical testing, certification or a particular production capacity is included.',
    faqs: [['Is functional testing included?', 'Testing needs an agreed procedure, equipment or fixture requirements, and pass/fail criteria. List these in the enquiry; assembly alone does not define functional-test coverage.'], ['Can parts be substituted?', 'Identify approved alternatives or a no-substitution rule in the BOM. Compatibility and approval must be settled before changing a specified part.']],
  },
  'box-build': {
    process: [['Map the complete assembly', 'List the PCBA, enclosure, mechanical parts, cables and connectors, with their revisions and supply responsibilities.'], ['Resolve integration details', 'Define wiring, connector mapping, mounting, access and the assembly sequence. Identify configuration or firmware-loading requirements separately.'], ['Agree product handoff', 'Set functional acceptance criteria, configuration records and packaging requirements for the integrated product.']],
    deliverables: ['An agreed product assembly and wiring scope', 'Configuration and functional acceptance requirements', 'Packaging and handoff documentation requirements'],
    checks: ['Board and enclosure fit, mounting and connector access', 'Wiring diagrams, connector mapping and assembly instructions', 'Finished-product functional and packaging criteria'],
    limits: 'Firmware loading, test fixtures, regulatory testing and packaging are separate scope decisions. Integrating a product does not establish safety or regulatory compliance.',
    faqs: [['What if the enclosure is not final?', 'Share the available drawings and identify open mechanical decisions. Mounting, connector openings and assembly access should be resolved before committing to product assembly.'], ['What defines a finished product?', 'Agree the assembly configuration, functional criteria, required records and packaging. These details distinguish an integrated assembly from an accepted, ready-to-handoff product.']],
  },
  'pcb-layout': {
    process: [['Establish design constraints', 'Identify the schematic revision, component libraries, board outline, mounting points and fixed connector locations.'], ['Agree placement and routing rules', 'Discuss stack-up, clearance, impedance and signal requirements alongside the selected fabricator’s rules.'], ['Define review and file release', 'Agree placement and routing checkpoints, output formats and the editable source files needed for handoff.']],
    deliverables: ['Editable design-source formats to agree', 'Gerber and drill file requirements', 'Assembly data and design-review checkpoints'],
    checks: ['Footprints and placement against the schematic and BOM', 'Routing constraints against agreed design rules', 'Board outline, mounting and connector alignment'],
    limits: 'Layer count, routing complexity, high-speed requirements and tool formats need confirmation. Layout review does not replace prototype validation, EMC testing or product certification.',
    faqs: [['Does layout include schematic design?', 'The layout brief starts with a schematic. If circuit design is still needed, separate that work from layout and discuss the engineering scope first.'], ['Which manufacturing files will I receive?', 'Agree Gerber, drill, assembly and editable source formats before work starts. Required files depend on the fabricator, assembler and design tools selected for the project.']],
  },
  'mechanical-enclosures': {
    process: [['Define fit and access', 'Collect board dimensions, mounting locations, connector positions and user-interface details.'], ['Review the operating environment', 'Discuss materials, finish, ventilation and fabrication requirements alongside how the product will be assembled and serviced.'], ['Agree a fit-review stage', 'Set drawing or CAD handoff formats and identify the review needed before committing to the final enclosure.']],
    deliverables: ['Agreed dimensional, material and finish requirements', 'Mounting and connector-access requirements', 'Drawing or CAD formats and fit-review milestones'],
    checks: ['Board clearances and mounting alignment', 'Connector openings and interface access', 'Assembly sequence, ventilation and serviceability requirements'],
    limits: 'Materials, tolerances, fabrication methods and environmental ratings require review. Ingress protection, thermal performance and safety are not implied by enclosure design.',
    faqs: [['Can I request an IP-rated enclosure?', 'State the target rating and operating conditions in the brief. The design approach and evidence required to support that rating need explicit review; no rating is assumed.'], ['Why review fit before fabrication?', 'A fit review helps identify mismatched mounting points, connector access and assembly clearances before final enclosure decisions are committed. Agree how that review will be carried out.']],
  },
  'engineering': {
    process: [['Define the product requirements', 'Describe intended functions, power, interfaces and environmental constraints, and distinguish existing work from open decisions.'], ['Separate engineering workstreams', 'Identify hardware design, firmware planning, prototype bring-up and test-fixture requirements as distinct scope items.'], ['Agree measurable milestones', 'Set review points, source-file handoff requirements and a validation plan tied to the product’s acceptance criteria.']],
    deliverables: ['A defined engineering scope and milestone plan', 'Source-file and documentation handoff requirements', 'Validation goals with measurable acceptance criteria'],
    checks: ['Requirements coverage and unresolved technical decisions', 'Power, interface and environmental constraints', 'Prototype observations against agreed validation goals'],
    limits: 'Tools, platforms, firmware development, test coverage and specialist requirements need confirmation. Prototype validation is not a claim of certification or readiness for every operating condition.',
    faqs: [['Can an existing prototype be reviewed?', 'Share what exists, known issues and the results you need. Schematics, firmware details and test observations help define whether the work is bring-up, investigation or further design.'], ['How should validation be scoped?', 'State the functions and conditions to check, what counts as a pass, and the required evidence. This makes the validation plan more useful than an unspecified request to test the device.']],
  },
  'component-procurement': {
    process: [['Review the sourcing BOM', 'Check manufacturer names, exact part numbers, packages, quantities and reference designators, and flag incomplete lines.'], ['Resolve availability decisions', 'Separate delivery priorities from approved alternatives. Agree which substitutions need review and who supplies each item.'], ['Confirm before purchase', 'Set sourcing responsibility, documentation and traceability requirements, with approval for changes to specified parts.']],
    deliverables: ['An agreed sourcing responsibility list', 'Availability and alternative-part decisions', 'Required procurement and traceability documentation'],
    checks: ['Exact part numbers, package details and BOM quantities', 'Approved alternatives and no-substitution rules', 'Delivery priorities and documentation requirements'],
    limits: 'Stock, lead times, source availability and pricing depend on the reviewed BOM. Authorized-distributor status, guaranteed availability and specific traceability records must not be assumed.',
    faqs: [['What happens when a part is unavailable?', 'Identify whether alternatives are permitted. A proposed replacement needs compatibility review and your approval; a similar description alone is not enough.'], ['Can I supply some components myself?', 'Yes, mixed sourcing can be discussed. Mark the customer-supplied BOM lines and quantities so purchasing responsibility and missing items are clear.']],
  },
};