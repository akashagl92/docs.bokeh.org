(function() {
  var fn = function() {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force === true) {
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
      };var element = document.getElementById("1dfcdf66-9fdd-4684-92fc-7e266e87fee5");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1dfcdf66-9fdd-4684-92fc-7e266e87fee5' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"b97f5e0c-f712-4f44-ad20-a2321f45403a":{"roots":{"references":[{"attributes":{"below":[{"id":"2e75b545-d249-4365-9afe-5a995c738368","type":"LinearAxis"}],"left":[{"id":"a56ce09f-96ca-413c-abfb-337df939e5ba","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"2e75b545-d249-4365-9afe-5a995c738368","type":"LinearAxis"},{"id":"122ef206-80e4-4642-988e-bf88d1d54afc","type":"Grid"},{"id":"a56ce09f-96ca-413c-abfb-337df939e5ba","type":"LinearAxis"},{"id":"d4246fe7-73a3-4dad-9146-2a82176c4803","type":"Grid"},{"id":"b1a39e05-65f3-440f-b0fd-5551f0e91adf","type":"BoxAnnotation"},{"id":"5b4f8888-228e-413d-bcb2-31455bca5a48","type":"GlyphRenderer"}],"title":{"id":"04f2bf56-b8ea-48fa-9e4f-371f79e905ea","type":"Title"},"tool_events":{"id":"c93b4f16-c311-4a94-9c1a-f39baf179f56","type":"ToolEvents"},"toolbar":{"id":"bc7a5b14-977b-405c-92c2-2badcff0b2b3","type":"Toolbar"},"x_range":{"id":"c52ebadf-0487-4443-80cb-26532107f0cf","type":"DataRange1d"},"y_range":{"id":"03adada3-2303-4dfd-a9ed-f56b7be2ec4f","type":"DataRange1d"}},"id":"74b13f38-2eb5-417c-bea7-7fbee42a0a77","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":""},"id":"04f2bf56-b8ea-48fa-9e4f-371f79e905ea","type":"Title"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"d6bca85c-5b9a-4a93-b674-d0acf6bc6421","type":"PanTool"},{"id":"a534f72f-89ae-49c3-82b4-98aa78d59826","type":"WheelZoomTool"},{"id":"3024551f-59b3-4438-a345-d3804715ad22","type":"BoxZoomTool"},{"id":"257fa8b1-2ce9-463a-80d9-fe86f93fce4b","type":"SaveTool"},{"id":"73e00e04-424c-4aba-96c8-c4c8db8f3509","type":"ResetTool"},{"id":"90b02765-206b-4970-9027-ef85211a16c4","type":"HelpTool"}]},"id":"bc7a5b14-977b-405c-92c2-2badcff0b2b3","type":"Toolbar"},{"attributes":{"plot":{"id":"74b13f38-2eb5-417c-bea7-7fbee42a0a77","subtype":"Figure","type":"Plot"},"ticker":{"id":"f24bfe3d-a5e4-4246-8d3a-f1d7f37b4a64","type":"BasicTicker"}},"id":"122ef206-80e4-4642-988e-bf88d1d54afc","type":"Grid"},{"attributes":{},"id":"11b6ca10-0ae9-4f29-8133-9bd58aed1907","type":"BasicTicker"},{"attributes":{"plot":{"id":"74b13f38-2eb5-417c-bea7-7fbee42a0a77","subtype":"Figure","type":"Plot"}},"id":"73e00e04-424c-4aba-96c8-c4c8db8f3509","type":"ResetTool"},{"attributes":{"data_source":{"id":"c4c7a058-e95a-4f1d-af31-22eb25054210","type":"ColumnDataSource"},"glyph":{"id":"91ffd4a3-e821-4ad4-ba7f-01de58590a8c","type":"Arc"},"hover_glyph":null,"nonselection_glyph":{"id":"45ce2d95-08c7-42a2-bb3a-a10b66310ba3","type":"Arc"},"selection_glyph":null},"id":"5b4f8888-228e-413d-bcb2-31455bca5a48","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"c52ebadf-0487-4443-80cb-26532107f0cf","type":"DataRange1d"},{"attributes":{"overlay":{"id":"b1a39e05-65f3-440f-b0fd-5551f0e91adf","type":"BoxAnnotation"},"plot":{"id":"74b13f38-2eb5-417c-bea7-7fbee42a0a77","subtype":"Figure","type":"Plot"}},"id":"3024551f-59b3-4438-a345-d3804715ad22","type":"BoxZoomTool"},{"attributes":{},"id":"f24bfe3d-a5e4-4246-8d3a-f1d7f37b4a64","type":"BasicTicker"},{"attributes":{"plot":{"id":"74b13f38-2eb5-417c-bea7-7fbee42a0a77","subtype":"Figure","type":"Plot"}},"id":"90b02765-206b-4970-9027-ef85211a16c4","type":"HelpTool"},{"attributes":{"end_angle":{"units":"rad","value":4.8},"line_color":{"value":"navy"},"radius":{"units":"data","value":0.1},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"91ffd4a3-e821-4ad4-ba7f-01de58590a8c","type":"Arc"},{"attributes":{"plot":{"id":"74b13f38-2eb5-417c-bea7-7fbee42a0a77","subtype":"Figure","type":"Plot"}},"id":"a534f72f-89ae-49c3-82b4-98aa78d59826","type":"WheelZoomTool"},{"attributes":{},"id":"a89db95e-649b-48c4-9a91-badbeddb2716","type":"BasicTickFormatter"},{"attributes":{"end_angle":{"units":"rad","value":4.8},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.1},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"45ce2d95-08c7-42a2-bb3a-a10b66310ba3","type":"Arc"},{"attributes":{"formatter":{"id":"4bb8f949-9391-4cc5-9e02-c3da1d3c986b","type":"BasicTickFormatter"},"plot":{"id":"74b13f38-2eb5-417c-bea7-7fbee42a0a77","subtype":"Figure","type":"Plot"},"ticker":{"id":"11b6ca10-0ae9-4f29-8133-9bd58aed1907","type":"BasicTicker"}},"id":"a56ce09f-96ca-413c-abfb-337df939e5ba","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"74b13f38-2eb5-417c-bea7-7fbee42a0a77","subtype":"Figure","type":"Plot"},"ticker":{"id":"11b6ca10-0ae9-4f29-8133-9bd58aed1907","type":"BasicTicker"}},"id":"d4246fe7-73a3-4dad-9146-2a82176c4803","type":"Grid"},{"attributes":{"plot":{"id":"74b13f38-2eb5-417c-bea7-7fbee42a0a77","subtype":"Figure","type":"Plot"}},"id":"d6bca85c-5b9a-4a93-b674-d0acf6bc6421","type":"PanTool"},{"attributes":{},"id":"4bb8f949-9391-4cc5-9e02-c3da1d3c986b","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"a89db95e-649b-48c4-9a91-badbeddb2716","type":"BasicTickFormatter"},"plot":{"id":"74b13f38-2eb5-417c-bea7-7fbee42a0a77","subtype":"Figure","type":"Plot"},"ticker":{"id":"f24bfe3d-a5e4-4246-8d3a-f1d7f37b4a64","type":"BasicTicker"}},"id":"2e75b545-d249-4365-9afe-5a995c738368","type":"LinearAxis"},{"attributes":{"callback":null},"id":"03adada3-2303-4dfd-a9ed-f56b7be2ec4f","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b1a39e05-65f3-440f-b0fd-5551f0e91adf","type":"BoxAnnotation"},{"attributes":{},"id":"c93b4f16-c311-4a94-9c1a-f39baf179f56","type":"ToolEvents"},{"attributes":{"plot":{"id":"74b13f38-2eb5-417c-bea7-7fbee42a0a77","subtype":"Figure","type":"Plot"}},"id":"257fa8b1-2ce9-463a-80d9-fe86f93fce4b","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"c4c7a058-e95a-4f1d-af31-22eb25054210","type":"ColumnDataSource"}],"root_ids":["74b13f38-2eb5-417c-bea7-7fbee42a0a77"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"b97f5e0c-f712-4f44-ad20-a2321f45403a","elementid":"1dfcdf66-9fdd-4684-92fc-7e266e87fee5","modelid":"74b13f38-2eb5-417c-bea7-7fbee42a0a77"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
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
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
