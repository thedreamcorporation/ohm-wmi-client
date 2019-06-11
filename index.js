const wmi = require('node-wmi')

module.exports = {
	getTemps: () => new Promise((resolve, reject) => {
		wmi
			.Query()
			.namespace('root/OpenHardwareMonitor')
			.class('Sensor')
			.where("SensorType='Temperature'")
			.exec((err, temps) => err || !temps
				? reject('No temps found')
				: resolve(temps))
	})
}
