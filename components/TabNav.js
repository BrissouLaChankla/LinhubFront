function TabNav({ tabs, activeTab, onTabClick }) {
  return (
    <div className="tab-nav">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={tab === activeTab ? "active" : ""}
          onClick={() => onTabClick(tab)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export default TabNav;
