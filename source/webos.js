/**
	A collection of static variables and functions core to webOS functionality
	and the webOS feature-set. A large amount of PalmSystem bindings combined
	with some utility functions.
*/

webos = window.webos || {};

<<<<<<< HEAD
enyo.requiresWindow(function() {
	if (window.PalmSystem) {
		PalmSystem.stageReady();
		webos = {
			identifier: function(){
				var tokens = PalmSystem.identifier.split(" ");
				return {
					appID: tokens[0],
					process: tokens[1]
				};
			},
			launchParams: function() {
				return enyo.json.parse(PalmSystem.launchParams || "{}") || {};
			},
			deviceInfo: function(){
				return enyo.json.parse(PalmSystem.deviceInfo);
			},
			fetchAppRootPath: function() {
				var base = window.location.href;
				if('baseURI' in window.document) {
					base = window.document.baseURI;
				} else {
					var baseTags = window.document.getElementsByTagName("base");
					if(baseTags.length > 0) {
						base = baseTags[0].href;
					}
				}
				var match = base.match(new RegExp(".*:\/\/[^#]*\/"));
				if (match) {
					return match[0];
=======
if (window.PalmSystem) {
	PalmSystem.stageReady();
	webos = {
		/**
			Returns an object containing the "appID" and "process" identifiers of
			the current-running application.
		*/
		identifier: function(){
			var tokens = PalmSystem.identifier.split(" ");
			return {
				appID: tokens[0],
				process: tokens[1],
			};
		},
		//* Returns an object containing the application's launch parameters.
		launchParams: function() {
			return enyo.json.parse(PalmSystem.launchParams || "{}") || {};
		},
		/**
			Returns an object containing device information such as:

				bluetoothAvailable
				carrierName
				coreNaviButton
				keyboardAvailable
				keyboardSlider
				keyboardType
				maximumCardWidth
				maximumCardHeight
				minimumCardWidth
				minimumCardHeight
				modelName
				modelNameAscii
				platformVersion
				platformVersionDot
				platformVersionMajor
				platformVersionMinor
				screenWidth
				screenHeight
				serialNumber
				touchableRows
				wifiAvailable
		*/
		deviceInfo: function(){
			return enyo.json.parse(PalmSystem.deviceInfo);
		},
		//* Returns the full URI path the application is running from.
		fetchAppRootPath: function() {
			var base = window.location.href;
			if('baseURI' in window.document) {
				base = window.document.baseURI;
			} else {
				var baseTags = window.document.getElementsByTagName("base");
				if(baseTags.length > 0) {
					base = baseTags[0].href;
>>>>>>> 1d2023b8d9c0b1f3b5c3e45d9da04eb23f58b6e0
				}
			}
			var match = base.match(new RegExp(".*:\/\/[^#]*\/"));
			if (match) {
				return match[0];
			}
			return "";
		},
		/**
			Synchronously fetchs, parses, and returns the appinfo.json file of
			the running application.
		*/
		fetchAppInfo: function() {
			if (!webos.appInfo) {
				try {
					var appInfoJSON, appInfoPath = webos.fetchAppRootPath() + "appinfo.json";
					if (window.palmGetResource) {
						appInfoJSON = palmGetResource(appInfoPath);
					} else {
						appInfoJSON = enyo.xhr.request({url: appInfoPath, sync: true}).responseText;
					}
					webos.appInfo = enyo.json.parse(appInfoJSON);
				} catch (e) {
					webos.appInfo = undefined;
				}
<<<<<<< HEAD
				return webos.appInfo;
			},
			localeInfo: function(){
				return {
					locale: PalmSystem.locale,
					localeRegion: PalmSystem.localeRegion,
					phoneRegion: PalmSystem.phoneRegion
				};
			},
			isTwelveHourFormat: function(){
				return (PalmSystem.timeFormat === "HH12");
			},
			pasteClipboard: function(){
				PalmSystem.paste();
			},
			getWindowOrientation: function() {
				//Returns one of 'up', 'down', 'left' or 'right'.
				return PalmSystem.screenOrientation;
			},
			setWindowOrientation: function(inOrientation) {
				//inOrientation is one of 'up', 'down', 'left', 'right', or 'free'
				PalmSystem.setWindowOrientation(inOrientation);
			},
			setFullScreen: function(inMode) {
				PalmSystem.enableFullScreenMode(inMode);
			},
			indicateNewContent: function(hasNew) {
				if(webos._throbId) {
					PalmSystem.removeNewContentIndicator(webos._throbId);
					webos._throbId = undefined;
				}
				if(hasNew) {
					webos._throbId = PalmSystem.addNewContentIndicator();
				}
			},
			isActivated: function(inWindow) {
				inWindow = inWindow || window;
				if(inWindow.PalmSystem) {
					return inWindow.PalmSystem.isActivated;
				}
				return false;
			},
			activate: function(inWindow) {
				inWindow = inWindow || window;
				if(inWindow.PalmSystem) {
					inWindow.PalmSystem.activate();
				}
			},
			deactivate: function(inWindow) {
				inWindow = inWindow || window;
				if(inWindow.PalmSystem) {
					inWindow.PalmSystem.deactivate();
				}
			},
			addBannerMessage: function() {
				return PalmSystem.addBannerMessage.apply(PalmSystem, arguments);
			},
			removeBannerMessage: function(inId) {
				PalmSystem.removeBannerMessage.apply(PalmSystem, arguments);
			},
			setWindowProperties: function(inWindow, inProps) {
				if(arguments.length==1) {
					inProps = inWindow;
					inWindow = window;
				}
				if(inWindow.PalmSystem) {
					inWindow.PalmSystem.setWindowProperties(inProps);
				}
			},
	
			/** Searches _inText_ for URLs (web and mailto) and emoticons (if supported),
			 * and returns a new string with those entities replaced by HTML links and images
			 * (respectively).
			 *
			 * Passing false for an  _inOptions_ field will prevent LunaSysMgr from HTML-izing
			 * that text type.
			 *
			 * Default option values:
			 *	{
			 *		phoneNumber: true,
			 *		emailAddress: true,
			 *		webLink: true,
			 *		schemalessWebLink: true,
			 *		emoticon: true
			 *	}
			 **/
			runTextIndexer: function(inText, inOptions){
				if (inText && inText.length > 0 && PalmSystem.runTextIndexer) {
					return PalmSystem.runTextIndexer(inText, inOptions);
				}
				return inText;
			},
			keyboard: undefined //undefined unless a virtual keyboard is present
		};
	}
});
=======
			}
			return webos.appInfo;
		},
		//* Returns an object containing the _"locale"_, _"localeRegion"_, and _"phoneRegion"_.
		localeInfo: function(){
			return {
				locale: PalmSystem.locale,
				localeRegion: PalmSystem.localeRegion,
				phoneRegion: PalmSystem.phoneRegion
			};
		},
		//* Whether or not the device is in 12-hour format.
		isTwelveHourFormat: function(){
			return (PalmSystem.timeFormat === "HH12");
		},
		//* Pastes any content in the clipboard.
		pasteClipboard: function(){
			PalmSystem.paste();
		},
		/**
			Returns the current device orientation; one of _"up"_, _"down"_, _"left"_,
			or _"right"_.
		*/
		getWindowOrientation: function() {
			//Returns one of 'up', 'down', 'left' or 'right'.
			return PalmSystem.screenOrientation;
		},
		/**
			Sets the device orientation. Acceptable values include _"up"_, _"down"_,
			_"left"_, _"right"_, and _"free"_.
		*/
		setWindowOrientation: function(inOrientation) {
			//inOrientation is one of 'up', 'down', 'left', 'right', or 'free'
			PalmSystem.setWindowOrientation(inOrientation);
		},
		//* Enables or disables fullscreen mode.
		setFullScreen: function(inMode) {
			PalmSystem.enableFullScreenMode(inMode);
		},
		/**
			New content management with LED notifications. Pass _true_ to
			indicate new content, pass _false_ to remove indications.
		indicateNewContent: function(hasNew) {
			if(webos._throbId) {
				PalmSystem.removeNewContentIndicator(webos._throbId);
				webos._throbId = undefined;
			}
			if(hasNew) {
				webos._throbId = PalmSystem.addNewContentIndicator();
			}		
		},
		/**
			Returns _true_ or _false_ depending if the given window is activated.
			If no _inWindow_ is specified, `window` is used.
		*/
		isActivated: function(inWindow) {
			inWindow = inWindow || window;
			if(inWindow.PalmSystem) {
				return inWindow.PalmSystem.isActivated
			}
			return false;
		},
		/**
			Activates a given window. If no _inWindow_ is specified, `window`
			is used.
		*/
		activate: function(inWindow) {
			inWindow = inWindow || window;
			if(inWindow.PalmSystem) {
				inWindow.PalmSystem.activate();
			}
		},
		/**
			Deactivates a given window. If no _inWindow_ is specified, `window`
			is used.
		*/
		deactivate: function(inWindow) {
			inWindow = inWindow || window;
			if(inWindow.PalmSystem) {
				inWindow.PalmSystem.deactivate();
			}
		},
		/**
			Adds a banner message; it will be displayed briefly before disappearing.
			Returns the banner ID.

				_inMessage_: (required) message to display
				_inJson_: (required) JSON-formatted string re-launch parameters
				_inIcon_: icon to display
				_inSoundClass_: sound class to play
				_inSoundPath_: path to sound to play
				_inSoundDuration_: duration of sound to play
		*/
		addBannerMessage: function(inMessage, inJson, inIcon, inSoundClass, inSoundPath, inSoundDuration) {
			return PalmSystem.addBannerMessage.apply(PalmSystem, arguments);
		},
		//* Removes a banner message by a given banner ID.
		removeBannerMessage: function(inId) {
			PalmSystem.removeBannerMessage.apply(PalmSystem, arguments);
		},
		/**
			Set webOS system properties of a given window.

			Properties are an object and can contain the following settings:

				_blockScreenTimeout_ (Boolean)
				_setSubtleLightbar_ (Boolean)
				_fastAccelerometer_ (Boolean)
		*/
		setWindowProperties: function(inWindow, inProps) {
			if(arguments.length==1) {
				inProps = inWindow;
				inWindow = window;
			}
			if(inWindow.PalmSystem) {
				inWindow.PalmSystem.setWindowProperties(inProps);
			}
		},

		/**
			Searches _inText_ for URLs (web and mailto) and emoticons (if supported),
			and returns a new string with those entities replaced by HTML links and
			images (respectively).

			Passing false for an  _inOptions_ field will prevent LunaSysMgr from
			HTML-izing that text type.

			Default option values:

				phoneNumber: true,
				emailAddress: true,
				webLink: true,
				schemalessWebLink: true,
				emoticon: true
		*/
		runTextIndexer: function(inText, inOptions){
			if (inText && inText.length > 0 && PalmSystem.runTextIndexer) {
				return PalmSystem.runTextIndexer(inText, inOptions);
			}
			return inText;
		},
	};
}
//Reference pointing for convenience
>>>>>>> 1d2023b8d9c0b1f3b5c3e45d9da04eb23f58b6e0
enyo.webos = webos;
