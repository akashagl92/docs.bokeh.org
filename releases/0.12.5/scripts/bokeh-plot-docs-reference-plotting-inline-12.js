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
      };var element = document.getElementById("1234242a-24c0-4047-870e-dee10c7b753f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1234242a-24c0-4047-870e-dee10c7b753f' but no matching script tag was found. ")
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
                var docs_json = {"21c64f8a-a6d3-4b7e-b840-10205a673b61":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"0828a4c7-bc45-46d7-8494-8211bfc7ef41","type":"PanTool"},{"id":"be0e460b-a492-4866-a814-1bd1e6bce48c","type":"WheelZoomTool"},{"id":"a4f065eb-6064-4b4b-b5a2-b8095ec192dc","type":"BoxZoomTool"},{"id":"078f831f-c6ce-4e1e-bd0b-2f2cd5dcc4a5","type":"SaveTool"},{"id":"e51da3e0-5772-4441-9883-264f78d131cc","type":"ResetTool"},{"id":"311b1594-323d-468c-bdfb-4198bad94221","type":"HelpTool"}]},"id":"dcffaf66-f082-48a0-996f-5080df9b3e99","type":"Toolbar"},{"attributes":{"below":[{"id":"f6c850ba-f17e-4719-a6bf-95f2ad8b5ad7","type":"LinearAxis"}],"left":[{"id":"3bbe1639-fd13-4266-9896-f7c85c114c11","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"f6c850ba-f17e-4719-a6bf-95f2ad8b5ad7","type":"LinearAxis"},{"id":"720a1f49-bc3e-46e1-8209-4517746f62e0","type":"Grid"},{"id":"3bbe1639-fd13-4266-9896-f7c85c114c11","type":"LinearAxis"},{"id":"234bb517-1b59-489f-9985-1f9a311bfa21","type":"Grid"},{"id":"27d574c8-b1f6-4f26-af6a-d4a5d9fb329f","type":"BoxAnnotation"},{"id":"76f1426c-cae9-4025-87e7-e97f7e9ae806","type":"GlyphRenderer"}],"title":{"id":"2b60763e-f137-44b9-ab94-f1e477d61a4c","type":"Title"},"tool_events":{"id":"f0f06c18-a31e-4821-a6de-b2f0d1150bdb","type":"ToolEvents"},"toolbar":{"id":"dcffaf66-f082-48a0-996f-5080df9b3e99","type":"Toolbar"},"x_range":{"id":"87d99751-7c5f-4ff7-a0ce-ffca79397d73","type":"DataRange1d"},"y_range":{"id":"87befd3d-acad-4eda-b474-b2bad70805e8","type":"DataRange1d"}},"id":"0486b737-5b3e-4d5c-bfa6-4440e7347bf4","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"4a3945a7-6344-40c2-b104-b776dcb2e6d1","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"0486b737-5b3e-4d5c-bfa6-4440e7347bf4","subtype":"Figure","type":"Plot"}},"id":"be0e460b-a492-4866-a814-1bd1e6bce48c","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"0486b737-5b3e-4d5c-bfa6-4440e7347bf4","subtype":"Figure","type":"Plot"}},"id":"078f831f-c6ce-4e1e-bd0b-2f2cd5dcc4a5","type":"SaveTool"},{"attributes":{"overlay":{"id":"27d574c8-b1f6-4f26-af6a-d4a5d9fb329f","type":"BoxAnnotation"},"plot":{"id":"0486b737-5b3e-4d5c-bfa6-4440e7347bf4","subtype":"Figure","type":"Plot"}},"id":"a4f065eb-6064-4b4b-b5a2-b8095ec192dc","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"4a3945a7-6344-40c2-b104-b776dcb2e6d1","type":"BasicTickFormatter"},"plot":{"id":"0486b737-5b3e-4d5c-bfa6-4440e7347bf4","subtype":"Figure","type":"Plot"},"ticker":{"id":"457367b3-4c4c-44fe-94b5-b8bd165fc584","type":"BasicTicker"}},"id":"f6c850ba-f17e-4719-a6bf-95f2ad8b5ad7","type":"LinearAxis"},{"attributes":{},"id":"aeef3ad7-4591-4531-805e-56664617bf78","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"9a2450ab-5fb7-4b20-9cb1-10f691f5c486","type":"ColumnDataSource"},"glyph":{"id":"61c31ddf-62d7-4fdc-aacf-e11c59a41c23","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"296b4b9e-ab44-4e2b-9331-3074a4b6af9a","type":"MultiLine"},"selection_glyph":null},"id":"76f1426c-cae9-4025-87e7-e97f7e9ae806","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["xs","ys","line_color"],"data":{"line_color":["red","green"],"xs":[[1,2,3],[2,3,4]],"ys":[[6,7,2],[4,5,7]]}},"id":"9a2450ab-5fb7-4b20-9cb1-10f691f5c486","type":"ColumnDataSource"},{"attributes":{},"id":"f0f06c18-a31e-4821-a6de-b2f0d1150bdb","type":"ToolEvents"},{"attributes":{"line_color":{"field":"line_color"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"61c31ddf-62d7-4fdc-aacf-e11c59a41c23","type":"MultiLine"},{"attributes":{"plot":{"id":"0486b737-5b3e-4d5c-bfa6-4440e7347bf4","subtype":"Figure","type":"Plot"},"ticker":{"id":"457367b3-4c4c-44fe-94b5-b8bd165fc584","type":"BasicTicker"}},"id":"720a1f49-bc3e-46e1-8209-4517746f62e0","type":"Grid"},{"attributes":{"formatter":{"id":"aeef3ad7-4591-4531-805e-56664617bf78","type":"BasicTickFormatter"},"plot":{"id":"0486b737-5b3e-4d5c-bfa6-4440e7347bf4","subtype":"Figure","type":"Plot"},"ticker":{"id":"bb019df1-4fbd-4177-b006-a75e980c89c0","type":"BasicTicker"}},"id":"3bbe1639-fd13-4266-9896-f7c85c114c11","type":"LinearAxis"},{"attributes":{"plot":{"id":"0486b737-5b3e-4d5c-bfa6-4440e7347bf4","subtype":"Figure","type":"Plot"}},"id":"e51da3e0-5772-4441-9883-264f78d131cc","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"27d574c8-b1f6-4f26-af6a-d4a5d9fb329f","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"87d99751-7c5f-4ff7-a0ce-ffca79397d73","type":"DataRange1d"},{"attributes":{"plot":null,"text":""},"id":"2b60763e-f137-44b9-ab94-f1e477d61a4c","type":"Title"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"296b4b9e-ab44-4e2b-9331-3074a4b6af9a","type":"MultiLine"},{"attributes":{"dimension":1,"plot":{"id":"0486b737-5b3e-4d5c-bfa6-4440e7347bf4","subtype":"Figure","type":"Plot"},"ticker":{"id":"bb019df1-4fbd-4177-b006-a75e980c89c0","type":"BasicTicker"}},"id":"234bb517-1b59-489f-9985-1f9a311bfa21","type":"Grid"},{"attributes":{},"id":"bb019df1-4fbd-4177-b006-a75e980c89c0","type":"BasicTicker"},{"attributes":{"plot":{"id":"0486b737-5b3e-4d5c-bfa6-4440e7347bf4","subtype":"Figure","type":"Plot"}},"id":"0828a4c7-bc45-46d7-8494-8211bfc7ef41","type":"PanTool"},{"attributes":{},"id":"457367b3-4c4c-44fe-94b5-b8bd165fc584","type":"BasicTicker"},{"attributes":{"plot":{"id":"0486b737-5b3e-4d5c-bfa6-4440e7347bf4","subtype":"Figure","type":"Plot"}},"id":"311b1594-323d-468c-bdfb-4198bad94221","type":"HelpTool"},{"attributes":{"callback":null},"id":"87befd3d-acad-4eda-b474-b2bad70805e8","type":"DataRange1d"}],"root_ids":["0486b737-5b3e-4d5c-bfa6-4440e7347bf4"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"21c64f8a-a6d3-4b7e-b840-10205a673b61","elementid":"1234242a-24c0-4047-870e-dee10c7b753f","modelid":"0486b737-5b3e-4d5c-bfa6-4440e7347bf4"}];
                
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
