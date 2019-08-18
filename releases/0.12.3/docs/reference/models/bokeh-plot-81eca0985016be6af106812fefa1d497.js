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
      };var element = document.getElementById("2d0c39b2-4dbe-4072-8d04-05f9559f74b1");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2d0c39b2-4dbe-4072-8d04-05f9559f74b1' but no matching script tag was found. ")
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
                  var docs_json = {"514f0821-9531-49b2-8165-e833682fd8c8":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["y","x","yp01","xp01","xp02"],"data":{"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"xp01":[-1.9,-1.4,-0.9,-0.4,0.1,0.6,1.1,1.6,2.1],"xp02":[-1.6,-1.1,-0.6,-0.09999999999999998,0.4,0.9,1.4,1.9,2.4],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0],"yp01":[4.2,2.45,1.2,0.45,0.2,0.45,1.2,2.45,4.2]}},"id":"8491d9eb-cd6a-4b39-ad18-99b1a1788bfb","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"56a6ef4f-c576-421d-8a61-cbaebd9ce35f","type":"Toolbar"},{"attributes":{"data_source":{"id":"8491d9eb-cd6a-4b39-ad18-99b1a1788bfb","type":"ColumnDataSource"},"glyph":{"id":"6570b4fc-cdb5-4264-acec-a4d8f751e767","type":"Quadratic"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"54d4f9a4-71e6-4986-ae95-44ccda1353dd","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"4d157fc2-ec76-4583-b97a-17a8affb0242","type":"DataRange1d"},{"attributes":{"formatter":{"id":"bcf5ed6c-b7c8-45b5-9179-b0004a65d331","type":"BasicTickFormatter"},"plot":{"id":"af8dae83-a379-4dfb-ab96-9bf345bf5de1","type":"Plot"},"ticker":{"id":"94365493-69fa-4d01-9163-e434e33d5f88","type":"BasicTicker"}},"id":"49e2ad19-c74f-4696-814b-77e977431328","type":"LinearAxis"},{"attributes":{},"id":"82757b09-5ce8-4e4d-8625-787b7a07f7ba","type":"BasicTickFormatter"},{"attributes":{},"id":"94365493-69fa-4d01-9163-e434e33d5f88","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"af8dae83-a379-4dfb-ab96-9bf345bf5de1","type":"Plot"},"ticker":{"id":"461cc0a0-9de9-4d0c-894b-774b04b05829","type":"BasicTicker"}},"id":"e032cb26-e5bf-4543-817e-dbee42f63037","type":"Grid"},{"attributes":{"below":[{"id":"49e2ad19-c74f-4696-814b-77e977431328","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"208309c0-7172-44c4-94f1-45f8e9f2c588","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"54d4f9a4-71e6-4986-ae95-44ccda1353dd","type":"GlyphRenderer"},{"id":"49e2ad19-c74f-4696-814b-77e977431328","type":"LinearAxis"},{"id":"208309c0-7172-44c4-94f1-45f8e9f2c588","type":"LinearAxis"},{"id":"04c1950d-400f-4d7d-93f9-c7e539002c0c","type":"Grid"},{"id":"e032cb26-e5bf-4543-817e-dbee42f63037","type":"Grid"}],"title":null,"tool_events":{"id":"ea9e9f16-3109-47f1-afc1-bbeda4092e42","type":"ToolEvents"},"toolbar":{"id":"56a6ef4f-c576-421d-8a61-cbaebd9ce35f","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"25381a78-a810-4fcd-9974-9e537c5d16e0","type":"DataRange1d"},"y_range":{"id":"4d157fc2-ec76-4583-b97a-17a8affb0242","type":"DataRange1d"}},"id":"af8dae83-a379-4dfb-ab96-9bf345bf5de1","type":"Plot"},{"attributes":{"cx":{"field":"xp01"},"cy":{"field":"yp01"},"line_color":{"value":"#4DAF4A"},"line_width":{"value":3},"x0":{"field":"x"},"x1":{"field":"xp02"},"y0":{"field":"y"},"y1":{"field":"y"}},"id":"6570b4fc-cdb5-4264-acec-a4d8f751e767","type":"Quadratic"},{"attributes":{},"id":"461cc0a0-9de9-4d0c-894b-774b04b05829","type":"BasicTicker"},{"attributes":{},"id":"ea9e9f16-3109-47f1-afc1-bbeda4092e42","type":"ToolEvents"},{"attributes":{"formatter":{"id":"82757b09-5ce8-4e4d-8625-787b7a07f7ba","type":"BasicTickFormatter"},"plot":{"id":"af8dae83-a379-4dfb-ab96-9bf345bf5de1","type":"Plot"},"ticker":{"id":"461cc0a0-9de9-4d0c-894b-774b04b05829","type":"BasicTicker"}},"id":"208309c0-7172-44c4-94f1-45f8e9f2c588","type":"LinearAxis"},{"attributes":{"callback":null},"id":"25381a78-a810-4fcd-9974-9e537c5d16e0","type":"DataRange1d"},{"attributes":{"plot":{"id":"af8dae83-a379-4dfb-ab96-9bf345bf5de1","type":"Plot"},"ticker":{"id":"94365493-69fa-4d01-9163-e434e33d5f88","type":"BasicTicker"}},"id":"04c1950d-400f-4d7d-93f9-c7e539002c0c","type":"Grid"},{"attributes":{},"id":"bcf5ed6c-b7c8-45b5-9179-b0004a65d331","type":"BasicTickFormatter"}],"root_ids":["af8dae83-a379-4dfb-ab96-9bf345bf5de1"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"514f0821-9531-49b2-8165-e833682fd8c8","elementid":"2d0c39b2-4dbe-4072-8d04-05f9559f74b1","modelid":"af8dae83-a379-4dfb-ab96-9bf345bf5de1"}];
                  
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