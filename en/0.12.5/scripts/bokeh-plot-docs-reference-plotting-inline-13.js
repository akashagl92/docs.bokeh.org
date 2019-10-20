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
      };var element = document.getElementById("1b6745ae-d4db-49fe-8b11-2b2b52a21d2f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1b6745ae-d4db-49fe-8b11-2b2b52a21d2f' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.js"];
    
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
                var docs_json = {"e5fa1001-0c61-4744-98f2-57b871dded15":{"roots":{"references":[{"attributes":{"formatter":{"id":"95474b97-5396-42bf-a4a0-42602b2b08c5","type":"BasicTickFormatter"},"plot":{"id":"66393a4c-52f6-4d09-83cc-8ca314f74654","subtype":"Figure","type":"Plot"},"ticker":{"id":"bc851331-9f31-4e9e-b471-cd881bb38db2","type":"BasicTicker"}},"id":"4c57b2a8-8713-4739-a664-dbed5d7c8103","type":"LinearAxis"},{"attributes":{"below":[{"id":"4c57b2a8-8713-4739-a664-dbed5d7c8103","type":"LinearAxis"}],"left":[{"id":"d660022e-d565-461d-8a0a-d6cff3d5c109","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"4c57b2a8-8713-4739-a664-dbed5d7c8103","type":"LinearAxis"},{"id":"de01dbb4-7133-41e4-962f-d35bdc80fe58","type":"Grid"},{"id":"d660022e-d565-461d-8a0a-d6cff3d5c109","type":"LinearAxis"},{"id":"3f3e34ac-c376-4d44-a920-339341bf91f1","type":"Grid"},{"id":"36414727-7fe8-4957-a7d0-dca29e67943b","type":"BoxAnnotation"},{"id":"503008ff-b6fa-4ee5-8a82-ae568631f991","type":"GlyphRenderer"}],"title":{"id":"50a74cd2-fb86-4840-80e1-f1527af71999","type":"Title"},"tool_events":{"id":"54d60d89-84fc-44c0-aec9-77d9ef72a909","type":"ToolEvents"},"toolbar":{"id":"be0e0138-c571-480e-9716-8ea248b60e5c","type":"Toolbar"},"x_range":{"id":"1f2df883-02c9-4231-9273-5b4f6a15cba5","type":"DataRange1d"},"y_range":{"id":"d112c6f8-af72-40e2-84d9-de0c43f3e94a","type":"DataRange1d"}},"id":"66393a4c-52f6-4d09-83cc-8ca314f74654","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"a4e4389f-a124-4d8a-9779-cc92676d0b86","type":"BasicTicker"},{"attributes":{"plot":{"id":"66393a4c-52f6-4d09-83cc-8ca314f74654","subtype":"Figure","type":"Plot"}},"id":"41067b74-8f7d-415a-8de0-c02a03dfc30f","type":"PanTool"},{"attributes":{"plot":{"id":"66393a4c-52f6-4d09-83cc-8ca314f74654","subtype":"Figure","type":"Plot"},"ticker":{"id":"bc851331-9f31-4e9e-b471-cd881bb38db2","type":"BasicTicker"}},"id":"de01dbb4-7133-41e4-962f-d35bdc80fe58","type":"Grid"},{"attributes":{"formatter":{"id":"cdfe6c94-4736-4237-aa71-69ad0b9414af","type":"BasicTickFormatter"},"plot":{"id":"66393a4c-52f6-4d09-83cc-8ca314f74654","subtype":"Figure","type":"Plot"},"ticker":{"id":"a4e4389f-a124-4d8a-9779-cc92676d0b86","type":"BasicTicker"}},"id":"d660022e-d565-461d-8a0a-d6cff3d5c109","type":"LinearAxis"},{"attributes":{"plot":{"id":"66393a4c-52f6-4d09-83cc-8ca314f74654","subtype":"Figure","type":"Plot"}},"id":"92c13c83-b6a6-40e7-a2c1-65939095cd44","type":"ResetTool"},{"attributes":{"plot":null,"text":""},"id":"50a74cd2-fb86-4840-80e1-f1527af71999","type":"Title"},{"attributes":{"angle":{"units":"rad","value":-0.7},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.4},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"6c9e2378-044d-4bc3-a726-7091a9ecc68c","type":"Oval"},{"attributes":{},"id":"bc851331-9f31-4e9e-b471-cd881bb38db2","type":"BasicTicker"},{"attributes":{},"id":"54d60d89-84fc-44c0-aec9-77d9ef72a909","type":"ToolEvents"},{"attributes":{"callback":null},"id":"1f2df883-02c9-4231-9273-5b4f6a15cba5","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"41067b74-8f7d-415a-8de0-c02a03dfc30f","type":"PanTool"},{"id":"0db7c58a-acec-41cd-b62e-1e74d43c0177","type":"WheelZoomTool"},{"id":"e74be979-b933-4fca-8beb-dbfbce7bb7f4","type":"BoxZoomTool"},{"id":"7ad14184-f9d9-48a7-ae81-4d60c4198c98","type":"SaveTool"},{"id":"92c13c83-b6a6-40e7-a2c1-65939095cd44","type":"ResetTool"},{"id":"9636785a-c3c6-48b0-80e5-66f0d1253bd8","type":"HelpTool"}]},"id":"be0e0138-c571-480e-9716-8ea248b60e5c","type":"Toolbar"},{"attributes":{},"id":"95474b97-5396-42bf-a4a0-42602b2b08c5","type":"BasicTickFormatter"},{"attributes":{},"id":"cdfe6c94-4736-4237-aa71-69ad0b9414af","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"66393a4c-52f6-4d09-83cc-8ca314f74654","subtype":"Figure","type":"Plot"},"ticker":{"id":"a4e4389f-a124-4d8a-9779-cc92676d0b86","type":"BasicTicker"}},"id":"3f3e34ac-c376-4d44-a920-339341bf91f1","type":"Grid"},{"attributes":{"callback":null},"id":"d112c6f8-af72-40e2-84d9-de0c43f3e94a","type":"DataRange1d"},{"attributes":{"data_source":{"id":"d9141972-a5aa-49d0-97a5-0b8e49733d6a","type":"ColumnDataSource"},"glyph":{"id":"ce23b7d7-aabf-4a17-afce-db4066ee04f0","type":"Oval"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6c9e2378-044d-4bc3-a726-7091a9ecc68c","type":"Oval"},"selection_glyph":null},"id":"503008ff-b6fa-4ee5-8a82-ae568631f991","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"66393a4c-52f6-4d09-83cc-8ca314f74654","subtype":"Figure","type":"Plot"}},"id":"9636785a-c3c6-48b0-80e5-66f0d1253bd8","type":"HelpTool"},{"attributes":{"overlay":{"id":"36414727-7fe8-4957-a7d0-dca29e67943b","type":"BoxAnnotation"},"plot":{"id":"66393a4c-52f6-4d09-83cc-8ca314f74654","subtype":"Figure","type":"Plot"}},"id":"e74be979-b933-4fca-8beb-dbfbce7bb7f4","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"66393a4c-52f6-4d09-83cc-8ca314f74654","subtype":"Figure","type":"Plot"}},"id":"0db7c58a-acec-41cd-b62e-1e74d43c0177","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"d9141972-a5aa-49d0-97a5-0b8e49733d6a","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"66393a4c-52f6-4d09-83cc-8ca314f74654","subtype":"Figure","type":"Plot"}},"id":"7ad14184-f9d9-48a7-ae81-4d60c4198c98","type":"SaveTool"},{"attributes":{"angle":{"units":"rad","value":-0.7},"fill_color":{"value":"#1D91C0"},"height":{"units":"data","value":0.4},"line_color":{"value":"#1D91C0"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"ce23b7d7-aabf-4a17-afce-db4066ee04f0","type":"Oval"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"36414727-7fe8-4957-a7d0-dca29e67943b","type":"BoxAnnotation"}],"root_ids":["66393a4c-52f6-4d09-83cc-8ca314f74654"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"e5fa1001-0c61-4744-98f2-57b871dded15","elementid":"1b6745ae-d4db-49fe-8b11-2b2b52a21d2f","modelid":"66393a4c-52f6-4d09-83cc-8ca314f74654"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
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
