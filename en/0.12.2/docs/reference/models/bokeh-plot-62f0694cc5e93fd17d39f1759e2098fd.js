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
      };var element = document.getElementById("47d7b7cb-bf52-4703-9bf6-0a294d1c74c4");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '47d7b7cb-bf52-4703-9bf6-0a294d1c74c4' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.2.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"4a9d7837-c361-47a4-8f1a-827a7c658f75":{"roots":{"references":[{"attributes":{"callback":null},"id":"cab0f5e2-606e-412a-b4e6-2b6e2acb8a8f","type":"DataRange1d"},{"attributes":{"plot":{"id":"4e3a8703-bdda-4d32-838f-9fde7c10f2f1","type":"Plot"},"ticker":{"id":"ab07bdc0-78e4-4661-8ce2-b7cc9e8761b9","type":"BasicTicker"}},"id":"e28215a3-eb10-4345-99d3-4109489af47c","type":"Grid"},{"attributes":{},"id":"6271c64d-f0d0-4658-96bd-d047bd67d92d","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"f77b185a-85c4-4966-9f6e-fba9da6ca844","type":"ColumnDataSource"},"glyph":{"id":"b295b1d0-c80c-4337-9826-7db957f335ea","type":"Annulus"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"94b3330c-79e0-4b97-b541-421853ea8703","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#7fc97f"},"inner_radius":{"units":"data","value":0.2},"outer_radius":{"units":"data","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"b295b1d0-c80c-4337-9826-7db957f335ea","type":"Annulus"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"f77b185a-85c4-4966-9f6e-fba9da6ca844","type":"ColumnDataSource"},{"attributes":{},"id":"32c1d531-f816-4560-ad30-ccebb7ae2514","type":"ToolEvents"},{"attributes":{},"id":"c8836684-135b-40e9-892f-654ebe3cbe64","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"fa935b33-7e79-4914-9ac0-fa50044f12c0","type":"Toolbar"},{"attributes":{},"id":"ab07bdc0-78e4-4661-8ce2-b7cc9e8761b9","type":"BasicTicker"},{"attributes":{},"id":"35576804-829f-4784-96dd-2df89d03d710","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"07fba97b-816b-48a0-b020-f288e0ea6592","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"269894a2-0ce7-4cfc-9540-54c1d75db405","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"94b3330c-79e0-4b97-b541-421853ea8703","type":"GlyphRenderer"},{"id":"07fba97b-816b-48a0-b020-f288e0ea6592","type":"LinearAxis"},{"id":"269894a2-0ce7-4cfc-9540-54c1d75db405","type":"LinearAxis"},{"id":"e28215a3-eb10-4345-99d3-4109489af47c","type":"Grid"},{"id":"5f69adfa-2db2-4579-bdaf-dad45d6df59a","type":"Grid"}],"title":null,"tool_events":{"id":"32c1d531-f816-4560-ad30-ccebb7ae2514","type":"ToolEvents"},"toolbar":{"id":"fa935b33-7e79-4914-9ac0-fa50044f12c0","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"6a2b18a5-2234-4f68-965b-75df454f8936","type":"DataRange1d"},"y_range":{"id":"cab0f5e2-606e-412a-b4e6-2b6e2acb8a8f","type":"DataRange1d"}},"id":"4e3a8703-bdda-4d32-838f-9fde7c10f2f1","type":"Plot"},{"attributes":{"formatter":{"id":"35576804-829f-4784-96dd-2df89d03d710","type":"BasicTickFormatter"},"plot":{"id":"4e3a8703-bdda-4d32-838f-9fde7c10f2f1","type":"Plot"},"ticker":{"id":"c8836684-135b-40e9-892f-654ebe3cbe64","type":"BasicTicker"}},"id":"269894a2-0ce7-4cfc-9540-54c1d75db405","type":"LinearAxis"},{"attributes":{"formatter":{"id":"6271c64d-f0d0-4658-96bd-d047bd67d92d","type":"BasicTickFormatter"},"plot":{"id":"4e3a8703-bdda-4d32-838f-9fde7c10f2f1","type":"Plot"},"ticker":{"id":"ab07bdc0-78e4-4661-8ce2-b7cc9e8761b9","type":"BasicTicker"}},"id":"07fba97b-816b-48a0-b020-f288e0ea6592","type":"LinearAxis"},{"attributes":{"callback":null},"id":"6a2b18a5-2234-4f68-965b-75df454f8936","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"4e3a8703-bdda-4d32-838f-9fde7c10f2f1","type":"Plot"},"ticker":{"id":"c8836684-135b-40e9-892f-654ebe3cbe64","type":"BasicTicker"}},"id":"5f69adfa-2db2-4579-bdaf-dad45d6df59a","type":"Grid"}],"root_ids":["4e3a8703-bdda-4d32-838f-9fde7c10f2f1"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"4a9d7837-c361-47a4-8f1a-827a7c658f75","elementid":"47d7b7cb-bf52-4703-9bf6-0a294d1c74c4","modelid":"4e3a8703-bdda-4d32-838f-9fde7c10f2f1"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
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