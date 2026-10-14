"use client";

import { useState, type ReactNode } from "react";
import {
  Activity,
  ArrowDownToLine,
  ArrowUpRight,
  Bell,
  CalendarDays,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleHelp,
  ClipboardList,
  Clock3,
  CreditCard,
  FileBarChart,
  FileText,
  FlaskConical,
  GitBranch,
  LayoutDashboard,
  Menu,
  MoreHorizontal,
  Plus,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Stethoscope,
  Users,
} from "lucide-react";
import Erp4DentistGallery from "./erp4dentist-gallery";
import styles from "./erp4dentist-showcase.module.css";

const screens = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "calendar", label: "Calendar", icon: CalendarDays },
  { id: "appointments", label: "Appointments", icon: Clock3 },
  { id: "tooth-chart", label: "Tooth chart", icon: Activity },
  { id: "treatment", label: "Treatment plan", icon: ClipboardList },
  { id: "doctors", label: "Doctors", icon: Stethoscope },
  { id: "reports", label: "Reports", icon: FileBarChart },
  { id: "branches", label: "Branches", icon: GitBranch },
] as const;

type ScreenId = (typeof screens)[number]["id"];

const navigation = [
  { section: "OVERVIEW", items: [{ label: "Dashboard", icon: LayoutDashboard, screen: "dashboard" }] },
  {
    section: "PATIENT MANAGEMENT",
    items: [
      { label: "Appointments", icon: Clock3, screen: "appointments" },
      { label: "Calendar", icon: CalendarDays, screen: "calendar" },
      { label: "Patient Records", icon: Users, screen: "appointments" },
      { label: "Billing", icon: CreditCard, screen: "reports" },
      { label: "Estimation", icon: FileText, screen: "treatment" },
    ],
  },
  {
    section: "CLINICAL OPERATIONS",
    items: [
      { label: "Doctors", icon: Stethoscope, screen: "doctors" },
      { label: "Dental Operations", icon: FlaskConical, screen: "tooth-chart" },
    ],
  },
  {
    section: "PRACTICE",
    items: [
      { label: "Finances", icon: CreditCard, screen: "reports" },
      { label: "Reports", icon: FileBarChart, screen: "reports" },
      { label: "Branches", icon: GitBranch, screen: "branches" },
    ],
  },
] satisfies {
  section: string;
  items: { label: string; icon: typeof LayoutDashboard; screen: ScreenId }[];
}[];

const demoAppointments = [
  { patient: "Patient 001", service: "Routine check-up", doctor: "Dr. A.", time: "09:30 AM", status: "Checked in" },
  { patient: "Patient 002", service: "Dental cleaning", doctor: "Dr. B.", time: "10:15 AM", status: "Upcoming" },
  { patient: "Patient 003", service: "Follow-up visit", doctor: "Dr. A.", time: "11:00 AM", status: "Upcoming" },
  { patient: "Patient 004", service: "Consultation", doctor: "Dr. C.", time: "11:45 AM", status: "Confirmed" },
];

const demoDates = [
  { day: "SUN", date: 11, name: "Patient 001", detail: "Check-up", tone: "green" },
  { day: "MON", date: 12, name: "Patient 002", detail: "Cleaning", tone: "blue" },
  { day: "TUE", date: 13, name: "Patient 003", detail: "Follow-up", tone: "peach" },
  { day: "WED", date: 14, name: "Patient 004", detail: "Consultation", tone: "green" },
  { day: "THU", date: 15, name: "Patient 005", detail: "Routine visit", tone: "blue" },
  { day: "FRI", date: 16, name: "", detail: "", tone: "blue" },
  { day: "SAT", date: 17, name: "", detail: "", tone: "blue" },
];

function ToothIcon() {
  return (
    <svg className={styles.tooth} viewBox="0 0 42 56" fill="none" aria-hidden="true">
      <path
        d="M8 5c4-2 8-1 13 2 5-3 9-4 13-2 7 4 7 14 4 22l-8 23c-1 3-5 3-6 0l-3-14-3 14c-1 3-5 3-6 0L4 27C1 19 1 9 8 5Z"
        fill="#fffef9"
        stroke="#d8d4c8"
        strokeWidth="1.4"
      />
      <path d="m21 8 1 28" stroke="#e9e4d8" strokeWidth="1.2" />
    </svg>
  );
}

function Sparkline({ variant = "up" }: { variant?: "up" | "down" | "steady" }) {
  const paths = {
    up: "M0 49 C22 44 33 51 52 35 S82 42 102 18 S130 26 152 6",
    down: "M0 10 C22 12 31 22 53 17 S81 34 101 30 S128 43 152 49",
    steady: "M0 30 C20 26 30 33 49 29 S77 32 97 27 S128 30 152 26",
  };

  return (
    <svg className={styles.sparkline} viewBox="0 0 152 56" preserveAspectRatio="none" aria-hidden="true">
      <path className={styles.sparklineArea} d={`${paths[variant]} L152 56 L0 56 Z`} />
      <path className={styles.sparklineLine} d={paths[variant]} />
      <circle className={styles.sparklinePoint} cx="152" cy={variant === "up" ? "6" : variant === "down" ? "49" : "26"} r="3" />
    </svg>
  );
}

function DemoBadge() {
  return <span className={styles.demoBadge}>SAMPLE DATA</span>;
}

function ScreenHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <div className={styles.screenHeader}>
      <div className={styles.screenHeading}>
        <span className={styles.screenEyebrow}>{eyebrow}</span>
        <h3>{title}</h3>
        {description && <p>{description}</p>}
      </div>
      {children && <div className={styles.screenActions}>{children}</div>}
    </div>
  );
}

function SoftButton({
  children,
  primary = false,
}: {
  children: ReactNode;
  primary?: boolean;
}) {
  return (
    <span className={`${styles.softButton} ${primary ? styles.softButtonPrimary : ""}`}>
      {children}
    </span>
  );
}

function DashboardScreen() {
  const stats = [
    { label: "Appointments", value: "12", icon: CalendarDays, tone: "blue" },
    { label: "New patients", value: "06", icon: Users, tone: "violet" },
    { label: "Follow-ups", value: "04", icon: Activity, tone: "green" },
    { label: "Collections", value: "₹24.5k", icon: CreditCard, tone: "amber" },
  ];

  return (
    <>
      <ScreenHeader eyebrow="WEDNESDAY, 14 OCTOBER" title="Good morning, Doctor" description="Here’s what’s happening at your practice today.">
        <SoftButton>This month <ChevronDown /></SoftButton>
        <SoftButton primary><Plus /> New appointment</SoftButton>
      </ScreenHeader>
      <div className={styles.statGrid}>
        {stats.map(({ label, value, icon: Icon, tone }) => (
          <div className={styles.statCard} key={label}>
            <span className={`${styles.statIcon} ${styles[tone]}`}><Icon /></span>
            <span className={styles.statLabel}>{label}</span>
            <strong>{value}</strong>
            <span className={styles.statChange}>Today <span>↗</span></span>
          </div>
        ))}
      </div>
      <div className={styles.dashboardPanels}>
        <section className={`${styles.panel} ${styles.todayPanel}`}>
          <div className={styles.panelHeading}>
            <div><h4>Today&apos;s schedule</h4><span>4 appointments</span></div>
            <MoreHorizontal />
          </div>
          {demoAppointments.slice(0, 3).map((appointment, index) => (
            <div className={styles.todayRow} key={appointment.patient}>
              <span className={styles.timePill}>{appointment.time}</span>
              <span className={`${styles.avatarDot} ${styles[`avatar${index + 1}`]}`}>{String(index + 1).padStart(2, "0")}</span>
              <span className={styles.todayDetails}><strong>{appointment.patient}</strong><small>{appointment.service} · {appointment.doctor}</small></span>
              <span className={`${styles.statusDot} ${index === 0 ? styles.statusGreen : ""}`} />
            </div>
          ))}
        </section>
        <section className={`${styles.panel} ${styles.trendPanel}`}>
          <div className={styles.panelHeading}>
            <div><h4>Appointment trends</h4><span>Bookings over the last 5 weeks</span></div>
            <span className={styles.periodPill}>Month <ChevronDown /></span>
          </div>
          <div className={styles.chartArea}>
            <div className={styles.chartLabels}><span>12</span><span>8</span><span>4</span><span>0</span></div>
            <div className={styles.chart}>
              <i /><i /><i /><i />
              <svg viewBox="0 0 360 112" preserveAspectRatio="none" aria-label="Illustrative appointment trend">
                <path className={styles.chartFill} d="M0 27 L76 42 L151 34 L226 68 L290 53 L360 77 L360 112 L0 112Z" />
                <path className={styles.chartLine} d="M0 27 L76 42 L151 34 L226 68 L290 53 L360 77" />
                <circle cx="0" cy="27" r="3" /><circle cx="76" cy="42" r="3" /><circle cx="151" cy="34" r="3" /><circle cx="226" cy="68" r="3" /><circle cx="290" cy="53" r="3" /><circle cx="360" cy="77" r="3" />
              </svg>
              <div className={styles.chartXLabels}><span>W1</span><span>W2</span><span>W3</span><span>W4</span><span>W5</span></div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

function CalendarScreen() {
  return (
    <>
      <div className={styles.calendarToolbar}>
        <div className={styles.monthControl}><CalendarDays /><strong>October 2026</strong><button aria-label="Previous month"><ChevronLeft /></button><button aria-label="Next month"><ChevronRight /></button><span>Today</span></div>
        <div className={styles.calendarActions}><SoftButton><Search /> Search</SoftButton><SoftButton><SlidersHorizontal /> Filter</SoftButton><SoftButton>Month <ChevronDown /></SoftButton><SoftButton primary><Plus /> New appointment</SoftButton></div>
      </div>
      <div className={styles.calendarGrid}>
        <div className={styles.calendarDays}>{demoDates.map(({ day }) => <span key={day}>{day}</span>)}</div>
        <div className={styles.calendarCells}>
          {demoDates.map(({ day, date, name, detail, tone }) => (
            <div className={styles.calendarCell} key={day}>
              <span className={`${styles.calendarDate} ${date === 14 ? styles.calendarToday : ""}`}>{date}</span>
              {name && <div className={`${styles.calendarEvent} ${styles[`event${tone}`]}`}><strong>{name}</strong><span>{detail}</span><small>{day === "WED" ? "10:30 AM" : "09:30 AM"} · Dr. A.</small></div>}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function AppointmentsScreen() {
  return (
    <>
      <ScreenHeader eyebrow="PATIENT MANAGEMENT" title="Appointments" description="Manage your daily patient visits and follow-ups.">
        <SoftButton><Search /> Search patients</SoftButton><SoftButton><SlidersHorizontal /> Filter</SoftButton><SoftButton><ArrowDownToLine /> Export</SoftButton><SoftButton primary><Plus /> Add appointment</SoftButton>
      </ScreenHeader>
      <div className={styles.tablePanel}>
        <div className={styles.tableTitle}><strong>Appointment list</strong><span>4 appointments</span></div>
        <div className={styles.tableScroll}>
          <div className={`${styles.tableRow} ${styles.tableHeader}`}><span>NO.</span><span>PATIENT</span><span>DOCTOR</span><span>DATE &amp; TIME</span><span>STATUS</span><span>ACTION</span></div>
          {demoAppointments.map((appointment, index) => (
            <div className={styles.tableRow} key={appointment.patient}>
              <span><i className={styles.rowNumber}>{String(index + 1).padStart(2, "0")}</i></span>
              <span><strong>{appointment.patient}</strong><small>{appointment.service}</small></span>
              <span>{appointment.doctor}</span>
              <span>14 Oct 2026 <small>{appointment.time}</small></span>
              <span><i className={`${styles.tableStatus} ${index === 0 ? styles.tableStatusGreen : ""}`}>{appointment.status}</i></span>
              <span><MoreHorizontal className={styles.moreIcon} /></span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function ToothChartScreen() {
  const teeth = [
    "18", "17", "16", "15", "14", "13", "12", "11",
    "21", "22", "23", "24", "25", "26", "27", "28",
    "48", "47", "46", "45", "44", "43", "42", "41",
    "31", "32", "33", "34", "35", "36", "37", "38",
  ];

  return (
    <>
      <ScreenHeader eyebrow="CLINICAL OPERATIONS" title="Treatment estimation" description="Create a clear treatment plan for your patient.">
        <SoftButton><ChevronLeft /> Back to visit</SoftButton>
      </ScreenHeader>
      <div className={styles.patientBanner}>
        <span className={styles.patientAvatar}>P</span>
        <span><strong>Patient 001</strong><small>Demo patient · Record #DEMO-001</small></span>
        <span className={styles.demoStatus}>DEMO RECORD</span>
      </div>
      <div className={styles.chartToolbar}>
        <div><strong>Choose teeth</strong><span>Select one or more teeth to continue</span></div>
        <div><button>Full mouth</button><button>Upper</button><button>Lower</button><button className={styles.clearButton}>Clear</button></div>
      </div>
      <div className={styles.toothGrid}>
        {teeth.map((tooth, index) => (
          <button className={`${styles.toothButton} ${[11, 21, 27].includes(index) ? styles.selectedTooth : ""}`} key={tooth} aria-label={`Demo tooth ${tooth}`}>
            <ToothIcon /><span>{tooth}</span>
          </button>
        ))}
      </div>
      <div className={styles.planControls}>
        <div><span>Selected teeth</span><strong>11, 21, 27</strong></div>
        <div><span>Procedure</span><strong>Routine restoration <ChevronDown /></strong></div>
        <div><span>Treatment type</span><strong>Restorative <ChevronDown /></strong></div>
        <SoftButton primary><Plus /> Add to plan</SoftButton>
      </div>
    </>
  );
}

function TreatmentScreen() {
  const rows = [
    { tooth: "11", procedure: "Routine restoration", category: "Restorative", amount: "₹3,500" },
    { tooth: "21", procedure: "Preventive cleaning", category: "Preventive", amount: "₹2,000" },
    { tooth: "27", procedure: "Clinical review", category: "Consultation", amount: "₹1,500" },
  ];

  return (
    <>
      <ScreenHeader eyebrow="TREATMENT PLANNING" title="Treatment plan" description="Review proposed care before sharing the estimate.">
        <SoftButton><ArrowDownToLine /> Download</SoftButton><SoftButton primary><Plus /> Add procedure</SoftButton>
      </ScreenHeader>
      <div className={styles.treatmentPatient}>
        <span><i className={styles.patientAvatar}>P</i><span><strong>Patient 001</strong><small>Demo record · Created 14 Oct 2026</small></span></span>
        <span className={styles.planDraft}>DRAFT ESTIMATE</span>
      </div>
      <div className={styles.treatmentLayout}>
        <section className={styles.tablePanel}>
          <div className={styles.tableTitle}><strong>Proposed procedures</strong><span>3 procedures</span></div>
          <div className={styles.procedureList}>
            {rows.map((row) => <div className={styles.procedureRow} key={row.tooth}>
              <span className={styles.toothNumber}>{row.tooth}</span><span><strong>{row.procedure}</strong><small>{row.category} · Demo tooth {row.tooth}</small></span><strong>{row.amount}</strong><MoreHorizontal className={styles.moreIcon} />
            </div>)}
          </div>
          <div className={styles.treatmentTotal}><span>Illustrative estimate total</span><strong>₹7,000</strong></div>
        </section>
        <aside className={styles.estimateAside}><span>ESTIMATE SUMMARY</span><strong>₹7,000</strong><small>Sample total · not a real patient bill</small><i /><div><span>Procedures <b>3</b></span><span>Selected teeth <b>3</b></span></div><SoftButton primary>Review estimate <ArrowUpRight /></SoftButton></aside>
      </div>
    </>
  );
}

function DoctorsScreen() {
  const doctors = [
    { name: "Dr. A.", specialty: "General dentistry", status: "Available", tone: "green", initials: "A" },
    { name: "Dr. B.", specialty: "Restorative care", status: "Available", tone: "green", initials: "B" },
    { name: "Dr. C.", specialty: "Preventive care", status: "Away", tone: "amber", initials: "C" },
  ];

  return (
    <>
      <ScreenHeader eyebrow="CLINICAL OPERATIONS" title="Doctor directory" description="Manage providers and availability across your practice.">
        <SoftButton><Search /> Search</SoftButton><SoftButton primary><Plus /> Add doctor</SoftButton>
      </ScreenHeader>
      <div className={styles.doctorStats}><span><small>PROVIDERS</small><strong>03</strong></span><span><small>AVAILABLE TODAY</small><strong>02</strong></span><span><small>ON SCHEDULE</small><strong>06</strong></span></div>
      <div className={styles.doctorGrid}>
        {doctors.map((doctor, index) => (
          <article className={styles.doctorCard} key={doctor.name}>
            <div className={`${styles.doctorAvatar} ${styles[`doctor${doctor.initials}`]}`}>{doctor.initials}</div>
            <MoreHorizontal className={styles.moreIcon} />
            <div className={styles.doctorName}><h4>{doctor.name}</h4><span className={`${styles.doctorAvailability} ${doctor.tone === "amber" ? styles.away : ""}`}><i />{doctor.status}</span></div>
            <p><Stethoscope /> {doctor.specialty}</p>
            <div className={styles.doctorDivider} />
            <div className={styles.doctorMetrics}><span>Today&apos;s visits<strong>{index + 2}</strong></span><span>Schedule<strong>{index === 2 ? "Afternoon" : "Available"}</strong></span></div>
          </article>
        ))}
      </div>
    </>
  );
}

function ReportsScreen() {
  const metrics = [
    { label: "COLLECTIONS", value: "₹24,500", sub: "Illustrative total", line: "up" as const },
    { label: "OUTSTANDING", value: "₹8,250", sub: "Sample balance", line: "down" as const },
    { label: "PRACTICE VISITS", value: "34", sub: "Demo period", line: "steady" as const },
    { label: "TOP SERVICE", value: "Check-up", sub: "Illustrative data", line: "up" as const },
  ];

  return (
    <>
      <ScreenHeader eyebrow="PRACTICE ANALYTICS" title="Reports" description="An overview of activity for your selected period.">
        <SoftButton>This year <ChevronDown /></SoftButton><SoftButton><ArrowDownToLine /> Export</SoftButton>
      </ScreenHeader>
      <div className={styles.reportTabs}><span>Income summary</span><span>Outstanding</span><span>Provider activity</span><span>Visit summary</span></div>
      <div className={styles.reportMetricGrid}>
        {metrics.map((metric) => <div className={styles.reportMetric} key={metric.label}><span>{metric.label}</span><strong>{metric.value}</strong><small>{metric.sub}</small><Sparkline variant={metric.line} /></div>)}
      </div>
      <section className={styles.panel}>
        <div className={styles.panelHeading}><div><h4>Recent activity</h4><span>Illustrative data for this demo</span></div><SoftButton><ArrowDownToLine /> Export CSV</SoftButton></div>
        <div className={styles.reportRows}>{[["14 Oct 2026", "Patient 001", "Routine check-up", "₹1,500"], ["13 Oct 2026", "Patient 002", "Preventive cleaning", "₹2,000"], ["12 Oct 2026", "Patient 003", "Clinical review", "₹1,000"]].map((row) => <div className={styles.reportRow} key={row[1]}>{row.map((item, index) => <span className={index === row.length - 1 ? styles.reportAmount : ""} key={item}>{item}</span>)}</div>)}</div>
      </section>
    </>
  );
}

function BranchesScreen() {
  const branches = [
    { name: "Central Practice", location: "Chennai", manager: "Practice manager A.", team: "8 team members", initials: "C", tone: "blue" },
    { name: "Garden Practice", location: "Pondicherry", manager: "Practice manager B.", team: "5 team members", initials: "G", tone: "green" },
    { name: "Riverside Practice", location: "Chennai", manager: "Practice manager C.", team: "6 team members", initials: "R", tone: "violet" },
  ];

  return (
    <>
      <ScreenHeader eyebrow="PRACTICE ADMINISTRATION" title="Branch management" description="Manage locations, teams, and access from one place.">
        <SoftButton><Search /> Search branches</SoftButton><SoftButton primary><Plus /> Add branch</SoftButton>
      </ScreenHeader>
      <div className={styles.branchMetrics}><span><Users /><small>TEAM MEMBERS</small><strong>19</strong></span><span><ShieldCheck /><small>ADMIN ACCOUNTS</small><strong>03</strong></span><span><GitBranch /><small>PRACTICE LOCATIONS</small><strong>03</strong></span></div>
      <div className={styles.branchTable}>
        <div className={`${styles.branchRow} ${styles.branchTableHeader}`}><span>PRACTICE</span><span>LOCATION</span><span>MANAGER</span><span>TEAM</span><span>STATUS</span></div>
        {branches.map((branch) => <div className={styles.branchRow} key={branch.name}>
          <span className={styles.branchName}><i className={`${styles.branchIcon} ${styles[`branch${branch.tone}`]}`}><GitBranch /></i><strong>{branch.name}</strong></span>
          <span>{branch.location}</span><span>{branch.manager}<small>Administrator</small></span><span>{branch.team}</span><span className={styles.branchStatus}>Active</span>
        </div>)}
      </div>
    </>
  );
}

const screenContent = {
  dashboard: <DashboardScreen />,
  calendar: <CalendarScreen />,
  appointments: <AppointmentsScreen />,
  "tooth-chart": <ToothChartScreen />,
  treatment: <TreatmentScreen />,
  doctors: <DoctorsScreen />,
  reports: <ReportsScreen />,
  branches: <BranchesScreen />,
} satisfies Record<ScreenId, ReactNode>;

export default function Erp4DentistShowcase() {
  const [activeScreen, setActiveScreen] = useState<ScreenId>("dashboard");
  const activeItem = screens.find((screen) => screen.id === activeScreen) ?? screens[0];

  return (
    <div className={styles.showcase}>
      <div className={styles.showcaseTop}>
        <div className={styles.showcaseTitle}>
          <span className={styles.brandMark}>e</span>
          <span><strong>ERP4Dentist</strong><small>PRODUCT PREVIEW</small></span>
        </div>
        <DemoBadge />
      </div>
      <div className={styles.screenTabs} role="tablist" aria-label="ERP4Dentist sample screens">
        {screens.map(({ id, label, icon: Icon }) => (
          <button
            aria-selected={activeScreen === id}
            className={`${styles.screenTab} ${activeScreen === id ? styles.activeScreenTab : ""}`}
            id={`tab-${id}`}
            key={id}
            onClick={() => setActiveScreen(id)}
            role="tab"
            type="button"
            aria-controls="erp4dentist-screen-panel"
          >
            <Icon aria-hidden="true" /><span>{label}</span>
          </button>
        ))}
      </div>
      <div className={styles.appFrame}>
        <div className={styles.appHeader}>
          <span className={styles.mobileLogo}><span className={styles.brandMark}>e</span><strong>ERP4Dentist</strong></span>
          <button className={styles.menuButton} type="button" aria-label="Menu"><Menu /></button>
          <div className={styles.globalSearch}><Search /><span>Search patients, appointments...</span><kbd>⌘ K</kbd></div>
          <div className={styles.headerActions}><span><CircleHelp /></span><span><CalendarDays /></span><span className={styles.notification}><Bell /><i /></span><span className={styles.userAvatar}>AD</span></div>
        </div>
        <div className={styles.appContent}>
          <aside className={styles.appSidebar}>
            <div className={styles.branchSwitch}><GitBranch /><span>Central Practice</span><ChevronDown /></div>
            <nav aria-label="Sample application navigation">
              {navigation.map((group) => (
                <div className={styles.navGroup} key={group.section}>
                  <span className={styles.navSection}>{group.section}</span>
                  {group.items.map(({ label, icon: Icon, screen }) => (
                    <button className={`${styles.appNavItem} ${activeScreen === screen ? styles.activeAppNavItem : ""}`} key={label} onClick={() => setActiveScreen(screen)} type="button">
                      <Icon /><span>{label}</span>
                    </button>
                  ))}
                </div>
              ))}
            </nav>
            <div className={styles.sidebarFooter}><span className={styles.sidebarAvatar}>AD</span><span><strong>Practice admin</strong><small>Demo workspace</small></span><MoreHorizontal /></div>
          </aside>
          <section
            aria-labelledby={`tab-${activeScreen}`}
            className={styles.screenPanel}
            id="erp4dentist-screen-panel"
            role="tabpanel"
            tabIndex={0}
          >
            <div className={styles.mobileScreenTitle}><activeItem.icon /><span>{activeItem.label}</span></div>
            <div className={styles.screenContent}>{screenContent[activeScreen]}</div>
            <div className={styles.demoFootnote}><ShieldCheck /> Illustrative interface · fictional sample data · no real patient information</div>
          </section>
        </div>
      </div>
      <Erp4DentistGallery />
      <div className={styles.showcaseFooter}>
        <span><span className={styles.liveDot} /> Built &amp; maintained by me</span>
        <span>Frontend · Backend · Database · AWS</span>
      </div>
    </div>
  );
}
