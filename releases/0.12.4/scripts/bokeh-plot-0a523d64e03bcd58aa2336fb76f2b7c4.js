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
      };var element = document.getElementById("f6e2acac-361a-42f2-8cae-ee8ffd13735e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f6e2acac-361a-42f2-8cae-ee8ffd13735e' but no matching script tag was found. ")
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
                var docs_json = {"be70b611-18f9-4598-8d4f-9f71ecb807d3":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"a375a742-a7df-4bc3-8a6c-8c3bdeca87a3","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"ca288a65-e3ee-40e4-9256-48599f057ea7","subtype":"Figure","type":"Plot"}},"id":"00b198ea-0f39-4065-acae-704fbc1fcbe3","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"06f5d624-9778-4530-a6a6-78fb585dcf5c","type":"ColumnDataSource"},{"attributes":{},"id":"0f1ace02-394a-4d95-a8c8-0949d9c7a5d2","type":"ToolEvents"},{"attributes":{"callback":null},"id":"5a951493-0d5d-40e6-849a-7d717f9c580d","type":"DataRange1d"},{"attributes":{"formatter":{"id":"b41a2ec6-6644-4a8b-ab17-fd004779f4e4","type":"BasicTickFormatter"},"plot":{"id":"ca288a65-e3ee-40e4-9256-48599f057ea7","subtype":"Figure","type":"Plot"},"ticker":{"id":"6a8da728-ed63-4adc-b35c-7a43c7fbf3aa","type":"BasicTicker"}},"id":"0dcc66ea-84de-4a90-8291-9d92fe905d1b","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"ca288a65-e3ee-40e4-9256-48599f057ea7","subtype":"Figure","type":"Plot"},"ticker":{"id":"dc192afa-f752-4aa1-a43d-aaa414c0184c","type":"BasicTicker"}},"id":"f7564127-d4d5-4363-accd-bc6c609b87d5","type":"Grid"},{"attributes":{"plot":{"id":"ca288a65-e3ee-40e4-9256-48599f057ea7","subtype":"Figure","type":"Plot"},"ticker":{"id":"6a8da728-ed63-4adc-b35c-7a43c7fbf3aa","type":"BasicTicker"}},"id":"2a1a1462-682c-46f7-9b3f-4c1a59483f42","type":"Grid"},{"attributes":{"data_source":{"id":"06f5d624-9778-4530-a6a6-78fb585dcf5c","type":"ColumnDataSource"},"glyph":{"id":"40815e3b-fe4d-42f9-8981-4c503433851c","type":"Rect"},"hover_glyph":null,"nonselection_glyph":{"id":"a15faf52-d00e-42b7-b3c9-41105ee47fa6","type":"Rect"},"selection_glyph":null},"id":"a266a708-3f65-4950-bdc5-914fd8311dc9","type":"GlyphRenderer"},{"attributes":{},"id":"b41a2ec6-6644-4a8b-ab17-fd004779f4e4","type":"BasicTickFormatter"},{"attributes":{},"id":"6a8da728-ed63-4adc-b35c-7a43c7fbf3aa","type":"BasicTicker"},{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_color":{"value":"#CAB2D6"},"height":{"units":"screen","value":40},"line_color":{"value":"#CAB2D6"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"40815e3b-fe4d-42f9-8981-4c503433851c","type":"Rect"},{"attributes":{"overlay":{"id":"a375a742-a7df-4bc3-8a6c-8c3bdeca87a3","type":"BoxAnnotation"},"plot":{"id":"ca288a65-e3ee-40e4-9256-48599f057ea7","subtype":"Figure","type":"Plot"}},"id":"eb0f318d-dd11-4b0c-87a9-5cd90a8b3dbc","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"0f30d279-d04c-4f67-808b-580612b37b3e","type":"PanTool"},{"id":"18f00946-fe56-4551-8a60-9182b8689a03","type":"WheelZoomTool"},{"id":"eb0f318d-dd11-4b0c-87a9-5cd90a8b3dbc","type":"BoxZoomTool"},{"id":"d8de725e-0adf-4190-8335-f3590bd1c8fe","type":"SaveTool"},{"id":"e57dcb62-1afb-4dc8-b88c-62eb650f66c5","type":"ResetTool"},{"id":"00b198ea-0f39-4065-acae-704fbc1fcbe3","type":"HelpTool"}]},"id":"02cb47a7-e936-460d-8c31-49617d262763","type":"Toolbar"},{"attributes":{"plot":null,"text":""},"id":"5caaadf1-248d-4d7f-9298-40035d92ddc1","type":"Title"},{"attributes":{},"id":"dc192afa-f752-4aa1-a43d-aaa414c0184c","type":"BasicTicker"},{"attributes":{"formatter":{"id":"d3892cb1-b43e-42a9-b011-0e8a4cf54b06","type":"BasicTickFormatter"},"plot":{"id":"ca288a65-e3ee-40e4-9256-48599f057ea7","subtype":"Figure","type":"Plot"},"ticker":{"id":"dc192afa-f752-4aa1-a43d-aaa414c0184c","type":"BasicTicker"}},"id":"132233f8-6509-418b-b0fb-efa7a61063bb","type":"LinearAxis"},{"attributes":{},"id":"d3892cb1-b43e-42a9-b011-0e8a4cf54b06","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"f86a9c00-3788-47ab-958b-e64189a572d1","type":"DataRange1d"},{"attributes":{"plot":{"id":"ca288a65-e3ee-40e4-9256-48599f057ea7","subtype":"Figure","type":"Plot"}},"id":"d8de725e-0adf-4190-8335-f3590bd1c8fe","type":"SaveTool"},{"attributes":{"below":[{"id":"0dcc66ea-84de-4a90-8291-9d92fe905d1b","type":"LinearAxis"}],"left":[{"id":"132233f8-6509-418b-b0fb-efa7a61063bb","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"0dcc66ea-84de-4a90-8291-9d92fe905d1b","type":"LinearAxis"},{"id":"2a1a1462-682c-46f7-9b3f-4c1a59483f42","type":"Grid"},{"id":"132233f8-6509-418b-b0fb-efa7a61063bb","type":"LinearAxis"},{"id":"f7564127-d4d5-4363-accd-bc6c609b87d5","type":"Grid"},{"id":"a375a742-a7df-4bc3-8a6c-8c3bdeca87a3","type":"BoxAnnotation"},{"id":"a266a708-3f65-4950-bdc5-914fd8311dc9","type":"GlyphRenderer"}],"title":{"id":"5caaadf1-248d-4d7f-9298-40035d92ddc1","type":"Title"},"tool_events":{"id":"0f1ace02-394a-4d95-a8c8-0949d9c7a5d2","type":"ToolEvents"},"toolbar":{"id":"02cb47a7-e936-460d-8c31-49617d262763","type":"Toolbar"},"x_range":{"id":"5a951493-0d5d-40e6-849a-7d717f9c580d","type":"DataRange1d"},"y_range":{"id":"f86a9c00-3788-47ab-958b-e64189a572d1","type":"DataRange1d"}},"id":"ca288a65-e3ee-40e4-9256-48599f057ea7","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"ca288a65-e3ee-40e4-9256-48599f057ea7","subtype":"Figure","type":"Plot"}},"id":"0f30d279-d04c-4f67-808b-580612b37b3e","type":"PanTool"},{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"screen","value":40},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"a15faf52-d00e-42b7-b3c9-41105ee47fa6","type":"Rect"},{"attributes":{"plot":{"id":"ca288a65-e3ee-40e4-9256-48599f057ea7","subtype":"Figure","type":"Plot"}},"id":"18f00946-fe56-4551-8a60-9182b8689a03","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"ca288a65-e3ee-40e4-9256-48599f057ea7","subtype":"Figure","type":"Plot"}},"id":"e57dcb62-1afb-4dc8-b88c-62eb650f66c5","type":"ResetTool"}],"root_ids":["ca288a65-e3ee-40e4-9256-48599f057ea7"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"be70b611-18f9-4598-8d4f-9f71ecb807d3","elementid":"f6e2acac-361a-42f2-8cae-ee8ffd13735e","modelid":"ca288a65-e3ee-40e4-9256-48599f057ea7"}];
                
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
