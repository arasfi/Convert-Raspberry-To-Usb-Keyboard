# Convert Raspberry Pi to USB Keyboard

The **Raspberry Pi USB Keyboard Converter** is a versatile project designed to transform a Raspberry Pi into a fully functional USB keyboard. This conversion opens up possibilities for a range of applications, including automation, testing, and interfacing with other devices. With this project, your Raspberry Pi can simulate keyboard inputs, making it a valuable tool in diverse scenarios.

## Features

- **USB Keyboard Emulation:** The project allows your Raspberry Pi to emulate the behavior of a USB keyboard. This means you can send keystrokes programmatically, making it suitable for various automation tasks.

- **Versatility:** Use the converted Raspberry Pi as a USB keyboard in scenarios where manual input is needed, such as interacting with a computer or other USB-enabled devices.

- **Testing and Development:** Ideal for testing purposes or developing applications that involve keyboard input. The Raspberry Pi can simulate key presses and releases for testing software and hardware systems.

## Getting Started

To set up the Raspberry Pi USB Keyboard Converter, follow these steps:

```bash
# Clone the Repository
git clone https://github.com/arasfi/Convert-Raspberry-To-Usb-Keyboard.git

# Navigate to the Project Directory
cd Convert-Raspberry-To-Usb-Keyboard

# Chmod +x enable_hid.sh and enable hid in Raspberry Pi
chmod +x enable_hid.sh

#Execute enable_hid.sh
./enable_hid.sh

# Install Dependencies
# Ensure all necessary dependencies are installed. Check the project documentation for details on dependencies and installation instructions.
npm install

# Connect Hardware
# Set up the Raspberry Pi with the necessary hardware configurations. Ensure the USB connection is established correctly.

# Run the Converter
# Execute the main script or application to start the USB keyboard emulation on your Raspberry Pi.
npm start
# The backend server will be running on port 8000, and the WebSocket server will be listening on port 3000.
```
## Usage

1. **Configuring Key Inputs:**
   Customize the keyboard inputs by modifying the script or configuration files. Define the key sequences or actions you want the Raspberry Pi to emulate.

2. **Testing and Debugging:**
   Use the converted Raspberry Pi to test applications that rely on keyboard input. Debug and troubleshoot software and hardware systems with ease.

3. **Automation:**
   Incorporate the Raspberry Pi USB Keyboard Converter into automation projects. Simulate keyboard actions as part of automated processes.

## Contributing

Contributions to the Raspberry Pi USB Keyboard Converter project are welcome! Whether you want to report a bug, suggest an enhancement, or submit a pull request, your involvement is appreciated. Follow the contribution guidelines outlined in the project repository.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code for your purposes.

## Acknowledgments

Special thanks to the open-source project https://github.com/mtlynch/key-mime-pi for providing valuable resources and inspiration for this project.

---

Feel free to tailor and expand upon this README to provide more specific details about your project. Add information about supported Raspberry Pi models, troubleshooting tips, or any other relevant details that users may find helpful.

