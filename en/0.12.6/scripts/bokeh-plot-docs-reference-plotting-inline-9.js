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
        try {
          window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete window._bokeh_onload_callbacks
        }
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
      };var element = document.getElementById("5a9fcec1-3958-463d-bd9f-575ba9ebe3fb");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '5a9fcec1-3958-463d-bd9f-575ba9ebe3fb' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.js"];
    
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
                var docs_json = {"240c6958-f4aa-4149-8a74-0f1973518217":{"roots":{"references":[{"attributes":{"plot":null,"text":""},"id":"446746e5-93dd-49a9-b454-f9bbc46398f6","type":"Title"},{"attributes":{"fill_color":{"value":"#CAB2D6"},"height":{"value":0.5},"line_color":{"value":"#CAB2D6"},"right":{"field":"right"},"y":{"field":"y"}},"id":"74aadcd3-3360-48a7-bb1d-8132f799ea63","type":"HBar"},{"attributes":{"plot":{"id":"62ab58fd-8da6-419a-9a96-7bcabf0fafba","subtype":"Figure","type":"Plot"}},"id":"fed4ddb8-6a84-4536-a8f9-09cf9fcc8352","type":"PanTool"},{"attributes":{"plot":{"id":"62ab58fd-8da6-419a-9a96-7bcabf0fafba","subtype":"Figure","type":"Plot"}},"id":"57aa3071-0612-482c-817b-8e841f013ab9","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"cc2acaec-31d7-41c9-a8f0-3e88a8342b8f","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["y","right"],"data":{"right":[1,2,3],"y":[1,2,3]}},"id":"bd657ef5-f23e-46fe-88ea-9013251710c5","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"62ab58fd-8da6-419a-9a96-7bcabf0fafba","subtype":"Figure","type":"Plot"},"ticker":{"id":"37ec55d3-eab6-492d-b7bd-62806b5e93c3","type":"BasicTicker"}},"id":"6da02b6b-5ee9-40be-ab3c-4786322170dd","type":"Grid"},{"attributes":{},"id":"b2de9e56-5812-47b6-a8fc-44353b87d901","type":"LinearScale"},{"attributes":{},"id":"116c2b1f-a9a3-4de3-b865-aaef4fd56d7b","type":"BasicTicker"},{"attributes":{"formatter":{"id":"eed56b11-8f20-42a8-8760-1830c231aa7d","type":"BasicTickFormatter"},"plot":{"id":"62ab58fd-8da6-419a-9a96-7bcabf0fafba","subtype":"Figure","type":"Plot"},"ticker":{"id":"116c2b1f-a9a3-4de3-b865-aaef4fd56d7b","type":"BasicTicker"}},"id":"9627a11d-07bb-4bbc-affe-46316d5b2188","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"fed4ddb8-6a84-4536-a8f9-09cf9fcc8352","type":"PanTool"},{"id":"9bd677cb-1e4b-4f06-a7ed-ce6537f5b74a","type":"WheelZoomTool"},{"id":"4d10338f-e01a-4139-8b0c-15ae06a133d8","type":"BoxZoomTool"},{"id":"61a5fcfb-06de-4d1d-90bd-dcb4e6baf2b7","type":"SaveTool"},{"id":"98d9883a-bb80-4718-922a-99a571183dc7","type":"ResetTool"},{"id":"57aa3071-0612-482c-817b-8e841f013ab9","type":"HelpTool"}]},"id":"97b57c6f-6812-4c84-851c-a5e67120f468","type":"Toolbar"},{"attributes":{"plot":{"id":"62ab58fd-8da6-419a-9a96-7bcabf0fafba","subtype":"Figure","type":"Plot"}},"id":"9bd677cb-1e4b-4f06-a7ed-ce6537f5b74a","type":"WheelZoomTool"},{"attributes":{},"id":"37ec55d3-eab6-492d-b7bd-62806b5e93c3","type":"BasicTicker"},{"attributes":{},"id":"70a01888-9b94-43fa-9675-003e40c94e0d","type":"BasicTickFormatter"},{"attributes":{},"id":"eed56b11-8f20-42a8-8760-1830c231aa7d","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"62ab58fd-8da6-419a-9a96-7bcabf0fafba","subtype":"Figure","type":"Plot"}},"id":"98d9883a-bb80-4718-922a-99a571183dc7","type":"ResetTool"},{"attributes":{"callback":null},"id":"e45fd06e-3c40-4437-ba99-a63077200f9d","type":"DataRange1d"},{"attributes":{"formatter":{"id":"70a01888-9b94-43fa-9675-003e40c94e0d","type":"BasicTickFormatter"},"plot":{"id":"62ab58fd-8da6-419a-9a96-7bcabf0fafba","subtype":"Figure","type":"Plot"},"ticker":{"id":"37ec55d3-eab6-492d-b7bd-62806b5e93c3","type":"BasicTicker"}},"id":"e5326d29-45d0-4ab4-8391-701ef072ea9d","type":"LinearAxis"},{"attributes":{"data_source":{"id":"bd657ef5-f23e-46fe-88ea-9013251710c5","type":"ColumnDataSource"},"glyph":{"id":"74aadcd3-3360-48a7-bb1d-8132f799ea63","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"889723bd-1bbc-416a-a16c-58897d10838d","type":"HBar"},"selection_glyph":null},"id":"8af5a52e-4e67-4648-9f43-f577b3813f75","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"231a0e38-a75f-4e65-b58c-bce1b6ee22ba","type":"DataRange1d"},{"attributes":{"overlay":{"id":"cc2acaec-31d7-41c9-a8f0-3e88a8342b8f","type":"BoxAnnotation"},"plot":{"id":"62ab58fd-8da6-419a-9a96-7bcabf0fafba","subtype":"Figure","type":"Plot"}},"id":"4d10338f-e01a-4139-8b0c-15ae06a133d8","type":"BoxZoomTool"},{"attributes":{},"id":"2b0ada85-1f90-4f25-a0b8-20e55ce1751a","type":"LinearScale"},{"attributes":{"plot":{"id":"62ab58fd-8da6-419a-9a96-7bcabf0fafba","subtype":"Figure","type":"Plot"}},"id":"61a5fcfb-06de-4d1d-90bd-dcb4e6baf2b7","type":"SaveTool"},{"attributes":{"plot":{"id":"62ab58fd-8da6-419a-9a96-7bcabf0fafba","subtype":"Figure","type":"Plot"},"ticker":{"id":"116c2b1f-a9a3-4de3-b865-aaef4fd56d7b","type":"BasicTicker"}},"id":"28ad2310-a177-4bbf-9139-0e1975a71d15","type":"Grid"},{"attributes":{"below":[{"id":"9627a11d-07bb-4bbc-affe-46316d5b2188","type":"LinearAxis"}],"left":[{"id":"e5326d29-45d0-4ab4-8391-701ef072ea9d","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"9627a11d-07bb-4bbc-affe-46316d5b2188","type":"LinearAxis"},{"id":"28ad2310-a177-4bbf-9139-0e1975a71d15","type":"Grid"},{"id":"e5326d29-45d0-4ab4-8391-701ef072ea9d","type":"LinearAxis"},{"id":"6da02b6b-5ee9-40be-ab3c-4786322170dd","type":"Grid"},{"id":"cc2acaec-31d7-41c9-a8f0-3e88a8342b8f","type":"BoxAnnotation"},{"id":"8af5a52e-4e67-4648-9f43-f577b3813f75","type":"GlyphRenderer"}],"title":{"id":"446746e5-93dd-49a9-b454-f9bbc46398f6","type":"Title"},"tool_events":{"id":"44e227bf-3d82-4022-a0f8-b7a6499b64b7","type":"ToolEvents"},"toolbar":{"id":"97b57c6f-6812-4c84-851c-a5e67120f468","type":"Toolbar"},"x_range":{"id":"231a0e38-a75f-4e65-b58c-bce1b6ee22ba","type":"DataRange1d"},"x_scale":{"id":"b2de9e56-5812-47b6-a8fc-44353b87d901","type":"LinearScale"},"y_range":{"id":"e45fd06e-3c40-4437-ba99-a63077200f9d","type":"DataRange1d"},"y_scale":{"id":"2b0ada85-1f90-4f25-a0b8-20e55ce1751a","type":"LinearScale"}},"id":"62ab58fd-8da6-419a-9a96-7bcabf0fafba","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.5},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"right"},"y":{"field":"y"}},"id":"889723bd-1bbc-416a-a16c-58897d10838d","type":"HBar"},{"attributes":{},"id":"44e227bf-3d82-4022-a0f8-b7a6499b64b7","type":"ToolEvents"}],"root_ids":["62ab58fd-8da6-419a-9a96-7bcabf0fafba"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"240c6958-f4aa-4149-8a74-0f1973518217","elementid":"5a9fcec1-3958-463d-bd9f-575ba9ebe3fb","modelid":"62ab58fd-8da6-419a-9a96-7bcabf0fafba"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
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
