import React from 'react';

const Settings = () => {
  return (
    <div>
      <h1>Settings</h1>
      <p>Welcome to the Settings page! Here you can customize your app experience.</p>
      <form>
        <label>
          Theme:
          <select>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </label>
        <label>
          Font Size:
          <select>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </label>
        <input type="submit" value="Save" />
      </form>
    </div>
  );
};

export default Settings;