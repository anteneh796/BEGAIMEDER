import { BarChart3, Eye, MousePointer2, Users } from "lucide-react";

const metrics = [
  { label: "Page views", value: "24,860", Icon: Eye },
  { label: "Unique visitors", value: "8,420", Icon: Users },
  { label: "Admissions clicks", value: "1,284", Icon: MousePointer2 },
  { label: "Story reads", value: "6,930", Icon: BarChart3 },
];

const bars = [42,68,51,78,61,88,73,92,67,81,76,95];

export default function Analytics() {
  return (
    <section className="admin-content">
      <div className="admin-actions">
        <div>
          <span className="eyebrow">INSIGHTS</span>
          <h2>Analytics</h2>
          <p>High-level website engagement signals. Live analytics integration will plug into this workspace later.</p>
        </div>
      </div>
      <div className="metric-grid">
        {metrics.map(({ label, value, Icon }) => (
          <div className="metric" key={label}>
            <Icon size={18} />
            <span>{label}</span>
            <strong>{value}</strong>
            <small>Last 30 days</small>
          </div>
        ))}
      </div>
      <div className="panel analytics-placeholder">
        <h3>Engagement overview</h3>
        <div className="fake-bars">
          {bars.map((height, index) => <span key={index} style={{ height: height + "%" }} />)}
        </div>
        <p>Connect the production analytics provider in Phase 3/5 to replace these operational placeholders with real reporting.</p>
      </div>
    </section>
  );
}
