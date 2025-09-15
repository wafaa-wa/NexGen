import "./TopBarLoader.css";

const TopBarLoader = ({ blur = false, allowClicks = false, zIndex = 9999 }) => {
    return (
        <div
            className="topbar-loader-container"
            style={{
                pointerEvents: allowClicks ? "none" : "auto",
                zIndex: zIndex,
            }}
            role="progressbar"
            aria-busy="true"
        >
            <div className={`topbar-overlay ${blur ? "blurred" : ""}`} />

            <div className="topbar-bar-wrapper">
                <div className="topbar-bar" />
            </div>
        </div>
    );
};

export default TopBarLoader;