(function() {

	document.addEventListener('deviceready', onDeviceReady.bind(this), false);
	var pictureSource;
	var destinationType;


	function onDeviceReady() {
		pictureSource = navigator.camera.PictureSourceType;
		destinationType = navigator.camera.DestinationType;

document.getElementById("geolocation").onclick=function{
		navigator.geolocation.getCurrentPosition(geolocationSuccess,
                                         onError,
                                         {timeout: 5000});
		});

	document.getElementById("watchPosition").addEventListener=function{
			navigator.geolocation.watchPosition(onWatchSuccess, onError, { timeout: 70000 });

				});



		document.getElementById("capturePhoto").onclick = function() {
			navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
				quality : 50,

				destinationType : destinationType.DATA_URL
			});
		}



	};


function geolocationSuccess()
{
	element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
												'Longitude: ' + position.coords.longitude     + '<br />' +
												'<hr />'      + element.innerHTML;
}

function onWatchSuccess(){
	document.getElementById('watchPosition').innerHTML='Latitude: '          + position.coords.latitude          + '\n' +
						 'Longitude: '         + position.coords.longitude;
}


function onError(){
	alert('code: '    + error.code    + '\n' + 'message: ' + error.message);

}

	function onPhotoDataSuccess(imageData) {

		var smallImage = document.getElementById('smallImage');

		smallImage.style.display = 'block';

		smallImage.src = "data:image/jpeg;base64," + imageData;

	}

	function onFail(message) {

		alert('Failed because: ' + message);

	}

})();
