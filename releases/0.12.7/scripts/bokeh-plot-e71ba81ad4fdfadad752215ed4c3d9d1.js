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
      };var element = document.getElementById("505ad8c0-4b8c-496f-9745-133c7a82be9f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '505ad8c0-4b8c-496f-9745-133c7a82be9f' but no matching script tag was found. ")
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
                var docs_json = {"79abaadb-48e3-4dd8-b5a3-3965b5071227":{"roots":{"references":[{"attributes":{},"id":"54cfd890-b3c4-434f-936a-e3f38d0fb565","type":"BasicTicker"},{"attributes":{"overlay":{"id":"2f97d5fe-8e26-459f-8aa9-3af22eaa5c52","type":"BoxAnnotation"}},"id":"82e9c97b-829a-408b-9580-af90eb220ce9","type":"BoxZoomTool"},{"attributes":{},"id":"e36bfb1b-b112-4845-a025-ba57078139a4","type":"PanTool"},{"attributes":{},"id":"771d0dce-6fc5-43d8-932f-9144342a6299","type":"HelpTool"},{"attributes":{},"id":"198918cf-1c8f-4299-b496-9696e2447487","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"0486e2a4-30bf-4a9f-904c-5f33cc2a1aaa","type":"ColumnDataSource"}},"id":"fa8e9ccf-3a8a-44bd-b9ad-596fc8f3673b","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"e36bfb1b-b112-4845-a025-ba57078139a4","type":"PanTool"},{"id":"0cdbe1e5-aade-4f1c-9288-c19001d45ddb","type":"WheelZoomTool"},{"id":"82e9c97b-829a-408b-9580-af90eb220ce9","type":"BoxZoomTool"},{"id":"7a396d98-5acd-4c7f-b2f0-b2c7607fd58a","type":"SaveTool"},{"id":"001b98a1-8ff4-496c-9439-c02291051928","type":"ResetTool"},{"id":"771d0dce-6fc5-43d8-932f-9144342a6299","type":"HelpTool"}]},"id":"9b2754b9-8b42-4b51-a2ed-8ba1ca2fe57b","type":"Toolbar"},{"attributes":{},"id":"25b9141e-63e2-4dc1-be35-08b138be857c","type":"BasicTicker"},{"attributes":{},"id":"0cdbe1e5-aade-4f1c-9288-c19001d45ddb","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2],"y":[3,4]}},"id":"0486e2a4-30bf-4a9f-904c-5f33cc2a1aaa","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"11958b17-09f6-4d38-844c-c503420402fc","type":"BasicTickFormatter"},"plot":{"id":"f7d776e6-b815-493a-b800-8d9656a09013","subtype":"Figure","type":"Plot"},"ticker":{"id":"25b9141e-63e2-4dc1-be35-08b138be857c","type":"BasicTicker"}},"id":"2748cf5b-a4c6-4130-b442-78c1b079e325","type":"LinearAxis"},{"attributes":{},"id":"11958b17-09f6-4d38-844c-c503420402fc","type":"BasicTickFormatter"},{"attributes":{},"id":"001b98a1-8ff4-496c-9439-c02291051928","type":"ResetTool"},{"attributes":{},"id":"7a396d98-5acd-4c7f-b2f0-b2c7607fd58a","type":"SaveTool"},{"attributes":{"callback":null},"id":"b5e44634-df6b-4425-89c0-838acf70a14f","type":"DataRange1d"},{"attributes":{"formatter":{"id":"198918cf-1c8f-4299-b496-9696e2447487","type":"BasicTickFormatter"},"plot":{"id":"f7d776e6-b815-493a-b800-8d9656a09013","subtype":"Figure","type":"Plot"},"ticker":{"id":"54cfd890-b3c4-434f-936a-e3f38d0fb565","type":"BasicTicker"}},"id":"3d7513a4-abc3-4800-85d9-8f93db4385c9","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"b7699e18-1103-4e02-b327-cad5406ffa64","type":"Circle"},{"attributes":{"data_source":{"id":"0486e2a4-30bf-4a9f-904c-5f33cc2a1aaa","type":"ColumnDataSource"},"glyph":{"id":"b7699e18-1103-4e02-b327-cad5406ffa64","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5f421e85-e269-4657-9045-4bec7f046f68","type":"Circle"},"selection_glyph":null,"view":{"id":"fa8e9ccf-3a8a-44bd-b9ad-596fc8f3673b","type":"CDSView"}},"id":"ba6dfc28-31d4-4573-9581-80f8bda244cb","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5f421e85-e269-4657-9045-4bec7f046f68","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"2f97d5fe-8e26-459f-8aa9-3af22eaa5c52","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"c06ac872-593d-4e4c-a392-5c36efa8bded","type":"DataRange1d"},{"attributes":{},"id":"b4724404-cb09-4d9b-bcda-b090a62d4779","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"f7d776e6-b815-493a-b800-8d9656a09013","subtype":"Figure","type":"Plot"},"ticker":{"id":"54cfd890-b3c4-434f-936a-e3f38d0fb565","type":"BasicTicker"}},"id":"1edec726-b03e-4d30-a945-605f74fe8952","type":"Grid"},{"attributes":{"plot":null,"text":"Left Title"},"id":"5efb5cd7-3015-4be7-9900-aee4e965ed48","type":"Title"},{"attributes":{"plot":{"id":"f7d776e6-b815-493a-b800-8d9656a09013","subtype":"Figure","type":"Plot"},"ticker":{"id":"25b9141e-63e2-4dc1-be35-08b138be857c","type":"BasicTicker"}},"id":"f509bbee-be58-42c3-aee2-5c660cdae9be","type":"Grid"},{"attributes":{"below":[{"id":"2748cf5b-a4c6-4130-b442-78c1b079e325","type":"LinearAxis"}],"left":[{"id":"3d7513a4-abc3-4800-85d9-8f93db4385c9","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"2748cf5b-a4c6-4130-b442-78c1b079e325","type":"LinearAxis"},{"id":"f509bbee-be58-42c3-aee2-5c660cdae9be","type":"Grid"},{"id":"3d7513a4-abc3-4800-85d9-8f93db4385c9","type":"LinearAxis"},{"id":"1edec726-b03e-4d30-a945-605f74fe8952","type":"Grid"},{"id":"2f97d5fe-8e26-459f-8aa9-3af22eaa5c52","type":"BoxAnnotation"},{"id":"ba6dfc28-31d4-4573-9581-80f8bda244cb","type":"GlyphRenderer"}],"title":{"id":"5efb5cd7-3015-4be7-9900-aee4e965ed48","type":"Title"},"title_location":"left","toolbar":{"id":"9b2754b9-8b42-4b51-a2ed-8ba1ca2fe57b","type":"Toolbar"},"x_range":{"id":"c06ac872-593d-4e4c-a392-5c36efa8bded","type":"DataRange1d"},"x_scale":{"id":"a9680b99-16d2-4c7c-819d-da6b8b4df44f","type":"LinearScale"},"y_range":{"id":"b5e44634-df6b-4425-89c0-838acf70a14f","type":"DataRange1d"},"y_scale":{"id":"b4724404-cb09-4d9b-bcda-b090a62d4779","type":"LinearScale"}},"id":"f7d776e6-b815-493a-b800-8d9656a09013","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"a9680b99-16d2-4c7c-819d-da6b8b4df44f","type":"LinearScale"}],"root_ids":["f7d776e6-b815-493a-b800-8d9656a09013"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"79abaadb-48e3-4dd8-b5a3-3965b5071227","elementid":"505ad8c0-4b8c-496f-9745-133c7a82be9f","modelid":"f7d776e6-b815-493a-b800-8d9656a09013"}];
                
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
