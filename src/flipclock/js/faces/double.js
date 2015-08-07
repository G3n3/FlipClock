(function($) {

    /**
     * Twelve Hour Clock Face
     *
     * This class will generate a twelve hour clock for FlipClock.js
     *
     * @param  object  The parent FlipClock.Factory object
     * @param  object  An object of properties to override the default	
     */

    FlipClock.DoubleFace = FlipClock.TwentyFourHourClockFace.extend({

        /**
         * The meridium jQuery DOM object
         */

        meridium: false,

        /**
         * The meridium text as string for easy access
         */

        meridiumText: 'AM',

        /**
         * Perform some tasks on first flip
         */

        initFlip: false,

        /**
         * Build the clock face
         *
         * @param  object  Pass the time that should be used to display on the clock.	
         */

        build: function() {

            var t = this;
            var time = this.factory.time.getTime(false, this.showSeconds);

            this.factory.$el.addClass('flip-clock-double');

            this.base(time);
            this.meridiumText = this.getMeridium();
            this.meridium = $([
                '<ul class="flip-clock-meridium">',
                '<li>',
                '<a href="#">' + this.meridiumText + '</a>',
                '</li>',
                '</ul>'
            ].join(''));

            // this.meridium.insertAfter(this.lists[this.lists.length - 1].$el);
            this.meridium.insertAfter(this.lists[this.lists.length - 4].$el);
        },

        /**
         * Flip the clock face
         */

        flip: function(time, doNotAddPlayClass) {

            // On initial flip
            if (!this.initFlip) {

                var $el = this.factory.$el,
                    $flipcards = $el.find('.flip');

                // Remove last few now-useless flip cards
                $el.find('ul').slice(-3).remove();

                // Move dividers to correct positions
                var dividers = $el.find('.flip-clock-divider');
                $(dividers[0]).insertAfter($flipcards[0]);
                $(dividers[1]).insertAfter($flipcards[1]);

                this.initFlip = true;
            }

            if (this.meridiumText != this.getMeridium()) {
                this.meridiumText = this.getMeridium();
                this.meridium.find('a').html(this.meridiumText);
            }

            var time = this.factory.time.getTime(false, this.showSeconds);

            // Convert single digit time to doubles [0, 3, 2, 7, 5, 6] => [03, 27, 56]
            var every = 2,
                newTime = [],
                digits = '';
            for (var i = 0; i < time.length; i++) {
                digits += time[i];
                if (i % every) {
                    newTime.push(digits);
                    digits = '';
                }
            }
            time = newTime;
            // console.log(time);

            this.base(time, doNotAddPlayClass);
        },

        /**
         * Get the current meridium
         *
         * @return  string  Returns the meridium (AM|PM)
         */

        getMeridium: function() {
            return new Date().getHours() >= 12 ? 'PM' : 'AM';
        },

        /**
         * Is it currently in the post-medirium?
         *
         * @return  bool  Returns true or false
         */

        isPM: function() {
            return this.getMeridium() == 'PM' ? true : false;
        },

        /**
         * Is it currently before the post-medirium?
         *
         * @return  bool  Returns true or false
         */

        isAM: function() {
            return this.getMeridium() == 'AM' ? true : false;
        }

    });

}(jQuery));
