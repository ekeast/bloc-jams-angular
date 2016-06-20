(function() {
    function SongPlayer() {
        var SongPlayer = {};
        var currentSong = null;
        /**
        * @desc Buzz object audio file
        * @type {Object}
        */
        var currentBuzzObject = null;
        
        /**
        * @function setSong
        * @desc Stops currently playing song and loads a new audio file as currentBuzzObject
        * @param {Object} song
        */
        
        var setSong = function(song) {
            if (currentBuzzObject) {
                currentBuzzObject.stop();
                currentSong.playing = null;
            }
            
            currentBuzzObject = new buzz.sound(song.audioUrl, {
                formats: ['mp3'],
                preload: true
            });
            
            currentSong = song;
        };
        
        /**
        * @function playSong
        * @desc plays the currentBuzzObject file
        * @param {Object} song
        */
        var playSong = function(song) {
            currentBuzzObject.play();
            song.playing = true;
        };
        
        /**
        * @desc if the current song is not the selected song, it sets a new song; if the currentSong is the selected song and the song is paused, it plays the song
        * @param {Object} song
        */
        SongPlayer.play = function(song) {
            if (currentSong !== song){
                setSong(song);
                playSong(song);
            } else if (currentSong === song) {
                if (currentBuzzObject.isPaused()) {
                    playSong(song);
                }
            }
        };
        
        /**
        * @desc pauses the song passed into it
        * @param {Object} song
        */
         SongPlayer.pause = function(song) {
             currentBuzzObject.pause();
             song.playing = false;
         };
        
        return SongPlayer;
    }
    
    angular
        .module('blocJams')
        .factory('SongPlayer', SongPlayer);
})();