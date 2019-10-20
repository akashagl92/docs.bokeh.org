document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = "";
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force !== "") {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        delete window._bokeh_onload_callbacks
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        window._bokeh_onload_callbacks.push(callback);
        if (window._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        window._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            window._bokeh_is_loading--;
            if (window._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("29017e25-f931-473c-86b2-67869d26a903");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '29017e25-f931-473c-86b2-67869d26a903' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"f89b6a2b-3dad-459c-b33f-d99e0b0eee59":{"roots":{"references":[{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#3288Bd"},"line_width":{"value":3},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"27fa0f7b-3c25-4145-ac31-dfb10013f935","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"88caf1f7-045b-435c-9858-55a904c93aa7","type":"Plot"},"ticker":{"id":"a1660c61-0c92-4df4-8a01-735b31012b28","type":"BasicTicker"}},"id":"ce7ab840-c562-416d-8a20-75eaf915bb39","type":"Grid"},{"attributes":{"below":[{"id":"d951d452-7355-43a6-8cd9-f93e8d23af65","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"9adab784-4d51-4568-93b0-8e3e2189b4b4","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"56866aed-417b-4a31-8c44-8f62176c22d7","type":"GlyphRenderer"},{"id":"d951d452-7355-43a6-8cd9-f93e8d23af65","type":"LinearAxis"},{"id":"9adab784-4d51-4568-93b0-8e3e2189b4b4","type":"LinearAxis"},{"id":"e6672748-99c2-431b-8327-90fcbd525b6d","type":"Grid"},{"id":"ce7ab840-c562-416d-8a20-75eaf915bb39","type":"Grid"}],"title":null,"tool_events":{"id":"9b3ad965-f098-4c88-86bf-f2d8aa870d17","type":"ToolEvents"},"toolbar":{"id":"e7364bd1-5a7f-4f84-8dac-617d37c061c7","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"4d452623-372a-4aa5-85ff-9c6da3296306","type":"DataRange1d"},"y_range":{"id":"0010f656-25a6-4e81-af63-dc81dd9ca549","type":"DataRange1d"}},"id":"88caf1f7-045b-435c-9858-55a904c93aa7","type":"Plot"},{"attributes":{"callback":null},"id":"0010f656-25a6-4e81-af63-dc81dd9ca549","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["y","x","sizes"],"data":{"sizes":[10.0,11.25,12.5,13.75,15.0,16.25,17.5,18.75,20.0],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"3a8a4802-9493-488c-92e5-44876c0c9355","type":"ColumnDataSource"},{"attributes":{},"id":"9b3ad965-f098-4c88-86bf-f2d8aa870d17","type":"ToolEvents"},{"attributes":{},"id":"f94a4745-7f0d-4c71-a3ec-6b3b04916236","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"0135a20d-6e05-4a5d-83e2-c6b17019c6ee","type":"BasicTickFormatter"},"plot":{"id":"88caf1f7-045b-435c-9858-55a904c93aa7","type":"Plot"},"ticker":{"id":"a1660c61-0c92-4df4-8a01-735b31012b28","type":"BasicTicker"}},"id":"9adab784-4d51-4568-93b0-8e3e2189b4b4","type":"LinearAxis"},{"attributes":{"callback":null},"id":"4d452623-372a-4aa5-85ff-9c6da3296306","type":"DataRange1d"},{"attributes":{},"id":"0135a20d-6e05-4a5d-83e2-c6b17019c6ee","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"3a8a4802-9493-488c-92e5-44876c0c9355","type":"ColumnDataSource"},"glyph":{"id":"27fa0f7b-3c25-4145-ac31-dfb10013f935","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"56866aed-417b-4a31-8c44-8f62176c22d7","type":"GlyphRenderer"},{"attributes":{},"id":"f34f25e8-8b93-4ff9-ab1e-25e08f3fd817","type":"BasicTicker"},{"attributes":{"formatter":{"id":"f94a4745-7f0d-4c71-a3ec-6b3b04916236","type":"BasicTickFormatter"},"plot":{"id":"88caf1f7-045b-435c-9858-55a904c93aa7","type":"Plot"},"ticker":{"id":"f34f25e8-8b93-4ff9-ab1e-25e08f3fd817","type":"BasicTicker"}},"id":"d951d452-7355-43a6-8cd9-f93e8d23af65","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"e7364bd1-5a7f-4f84-8dac-617d37c061c7","type":"Toolbar"},{"attributes":{"plot":{"id":"88caf1f7-045b-435c-9858-55a904c93aa7","type":"Plot"},"ticker":{"id":"f34f25e8-8b93-4ff9-ab1e-25e08f3fd817","type":"BasicTicker"}},"id":"e6672748-99c2-431b-8327-90fcbd525b6d","type":"Grid"},{"attributes":{},"id":"a1660c61-0c92-4df4-8a01-735b31012b28","type":"BasicTicker"}],"root_ids":["88caf1f7-045b-435c-9858-55a904c93aa7"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"f89b6a2b-3dad-459c-b33f-d99e0b0eee59","elementid":"29017e25-f931-473c-86b2-67869d26a903","modelid":"88caf1f7-045b-435c-9858-55a904c93aa7"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i](window.Bokeh);
        }
        
      }
    
      if (window._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(this));
});