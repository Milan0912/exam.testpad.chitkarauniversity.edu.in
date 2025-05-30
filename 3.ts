enum DeviceStatus {
    On,
    Off,
    Standby
}

type SmartDevice = [string, string, DeviceStatus];

function toggleDeviceStatus(
    device: SmartDevice,
    newStatus: DeviceStatus
): SmartDevice | string {
    const currentStatus = device[2];

    if (currentStatus === DeviceStatus.Off && newStatus === DeviceStatus.Standby) {
        return "❌ Invalid transition: Cannot go directly from Off to Standby.";
    }

    device[2] = newStatus;

    return device;
}

let light: SmartDevice = ["Living Room Light", "Light", DeviceStatus.On];
let fan: SmartDevice = ["Ceiling Fan", "Fan", DeviceStatus.Off];

console.log("✅ Light status change:", toggleDeviceStatus(light, DeviceStatus.Standby));
console.log("⚠️ Fan status change:", toggleDeviceStatus(fan, DeviceStatus.Standby));
console.log("✅ Fan status change:", toggleDeviceStatus(fan, DeviceStatus.On));
