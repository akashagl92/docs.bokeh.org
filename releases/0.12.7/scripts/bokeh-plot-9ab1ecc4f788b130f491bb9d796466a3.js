(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("1ea3e6ed-7f98-4e08-b80c-a4b1c7ebfcb8");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1ea3e6ed-7f98-4e08-b80c-a4b1c7ebfcb8' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.7.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"2004fce6-43a4-4928-92dc-dec2f5006dcb":{"roots":{"references":[{"attributes":{"plot":null,"text":"Fruit Counts by Year"},"id":"7f22a69b-7e41-42a8-85fa-4e28600edcb8","type":"Title"},{"attributes":{},"id":"25738273-1b1a-4576-a06d-6848fad2c751","type":"CategoricalScale"},{"attributes":{},"id":"493af793-3972-4d66-aaee-dda1f5b92e5b","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"721f5b3d-f958-43f8-83f9-4ce10b93d45e","type":"ColumnDataSource"},"glyph":{"id":"66b2dc5a-33a4-4c39-b1c3-cf7e64b7fd9e","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"cee79482-a9d9-4643-bd90-c024ef7bf5ae","type":"VBar"},"selection_glyph":null,"view":{"id":"eb9d406f-8aad-42f2-931a-3d17eccd3c37","type":"CDSView"}},"id":"d899bd1e-d687-4654-bae4-2187e1dbe194","type":"GlyphRenderer"},{"attributes":{},"id":"c73522d9-7dcb-46e2-936a-e146d73ba135","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"x"}},"id":"66b2dc5a-33a4-4c39-b1c3-cf7e64b7fd9e","type":"VBar"},{"attributes":{"source":{"id":"721f5b3d-f958-43f8-83f9-4ce10b93d45e","type":"ColumnDataSource"}},"id":"eb9d406f-8aad-42f2-931a-3d17eccd3c37","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","counts"],"data":{"counts":[2,5,3,1,3,2,4,3,4,3,2,4,2,4,5,4,6,3],"x":[["Apples","2015"],["Apples","2016"],["Apples","2017"],["Pears","2015"],["Pears","2016"],["Pears","2017"],["Nectarines","2015"],["Nectarines","2016"],["Nectarines","2017"],["Plums","2015"],["Plums","2016"],["Plums","2017"],["Grapes","2015"],["Grapes","2016"],["Grapes","2017"],["Strawberries","2015"],["Strawberries","2016"],["Strawberries","2017"]]}},"id":"721f5b3d-f958-43f8-83f9-4ce10b93d45e","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"19da2695-3cb8-4443-93cb-21d0df19368d","subtype":"Figure","type":"Plot"},"ticker":{"id":"c73522d9-7dcb-46e2-936a-e146d73ba135","type":"BasicTicker"}},"id":"14376118-aaf9-491b-832b-d09a66bcca87","type":"Grid"},{"attributes":{},"id":"a413c9e1-7d15-43fb-a9c3-0379272b02f5","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"start":0},"id":"3c47de43-0f9d-443c-8088-d7386596fd76","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"x"}},"id":"cee79482-a9d9-4643-bd90-c024ef7bf5ae","type":"VBar"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"0086e206-9c91-48a9-bccc-10938542937b","type":"Toolbar"},{"attributes":{"below":[{"id":"383cb806-e7c6-4d21-9982-580d83d8a1be","type":"CategoricalAxis"}],"left":[{"id":"63a9474b-dad0-4f04-bbac-498e3bb36ed0","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"383cb806-e7c6-4d21-9982-580d83d8a1be","type":"CategoricalAxis"},{"id":"78ba9a39-9dc8-417c-ae44-37651fb9b94a","type":"Grid"},{"id":"63a9474b-dad0-4f04-bbac-498e3bb36ed0","type":"LinearAxis"},{"id":"14376118-aaf9-491b-832b-d09a66bcca87","type":"Grid"},{"id":"d899bd1e-d687-4654-bae4-2187e1dbe194","type":"GlyphRenderer"}],"title":{"id":"7f22a69b-7e41-42a8-85fa-4e28600edcb8","type":"Title"},"toolbar":{"id":"0086e206-9c91-48a9-bccc-10938542937b","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"13c1c77d-17fa-4704-836a-4f59aaad3f68","type":"FactorRange"},"x_scale":{"id":"25738273-1b1a-4576-a06d-6848fad2c751","type":"CategoricalScale"},"y_range":{"id":"3c47de43-0f9d-443c-8088-d7386596fd76","type":"DataRange1d"},"y_scale":{"id":"f047d19c-1aed-4395-988e-f8553f926b0f","type":"LinearScale"}},"id":"19da2695-3cb8-4443-93cb-21d0df19368d","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"22f88703-3404-4bb9-b598-86ad2be811db","type":"CategoricalTicker"},{"attributes":{"formatter":{"id":"a413c9e1-7d15-43fb-a9c3-0379272b02f5","type":"CategoricalTickFormatter"},"major_label_orientation":1,"plot":{"id":"19da2695-3cb8-4443-93cb-21d0df19368d","subtype":"Figure","type":"Plot"},"ticker":{"id":"22f88703-3404-4bb9-b598-86ad2be811db","type":"CategoricalTicker"}},"id":"383cb806-e7c6-4d21-9982-580d83d8a1be","type":"CategoricalAxis"},{"attributes":{},"id":"f047d19c-1aed-4395-988e-f8553f926b0f","type":"LinearScale"},{"attributes":{"callback":null,"factors":[["Apples","2015"],["Apples","2016"],["Apples","2017"],["Pears","2015"],["Pears","2016"],["Pears","2017"],["Nectarines","2015"],["Nectarines","2016"],["Nectarines","2017"],["Plums","2015"],["Plums","2016"],["Plums","2017"],["Grapes","2015"],["Grapes","2016"],["Grapes","2017"],["Strawberries","2015"],["Strawberries","2016"],["Strawberries","2017"]],"range_padding":0.1},"id":"13c1c77d-17fa-4704-836a-4f59aaad3f68","type":"FactorRange"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"19da2695-3cb8-4443-93cb-21d0df19368d","subtype":"Figure","type":"Plot"},"ticker":{"id":"22f88703-3404-4bb9-b598-86ad2be811db","type":"CategoricalTicker"}},"id":"78ba9a39-9dc8-417c-ae44-37651fb9b94a","type":"Grid"},{"attributes":{"formatter":{"id":"493af793-3972-4d66-aaee-dda1f5b92e5b","type":"BasicTickFormatter"},"plot":{"id":"19da2695-3cb8-4443-93cb-21d0df19368d","subtype":"Figure","type":"Plot"},"ticker":{"id":"c73522d9-7dcb-46e2-936a-e146d73ba135","type":"BasicTicker"}},"id":"63a9474b-dad0-4f04-bbac-498e3bb36ed0","type":"LinearAxis"}],"root_ids":["19da2695-3cb8-4443-93cb-21d0df19368d"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"2004fce6-43a4-4928-92dc-dec2f5006dcb","elementid":"1ea3e6ed-7f98-4e08-b80c-a4b1c7ebfcb8","modelid":"19da2695-3cb8-4443-93cb-21d0df19368d"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
