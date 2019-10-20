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
      };var element = document.getElementById("d91c736e-0ec0-47fa-a458-1dbca6ecc2a6");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd91c736e-0ec0-47fa-a458-1dbca6ecc2a6' but no matching script tag was found. ")
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
                var docs_json = {"b8522f21-8c86-4eae-8a0a-a63250b138ca":{"roots":{"references":[{"attributes":{"callback":null},"id":"6b54e903-e8cb-427d-99c0-8f0a89f3b950","type":"DataRange1d"},{"attributes":{"plot":null,"text":"Hover over points"},"id":"0d524bd1-7bb0-4d84-8745-3dc46bd8fec9","type":"Title"},{"attributes":{},"id":"7f83aaee-6628-4146-96c8-d3898122457f","type":"BasicTickFormatter"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"71e86ce4-03c8-4b03-a1d5-4246cdda4705","type":"Segment"},{"attributes":{"below":[{"id":"532cbcf5-95fa-40c7-b5c0-016b236e086a","type":"LinearAxis"}],"left":[{"id":"c4d5a6ff-1b57-4586-8977-792318adaa2c","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"532cbcf5-95fa-40c7-b5c0-016b236e086a","type":"LinearAxis"},{"id":"77de05d6-0740-42b2-8e82-4024dbe72846","type":"Grid"},{"id":"c4d5a6ff-1b57-4586-8977-792318adaa2c","type":"LinearAxis"},{"id":"894c72ed-7062-4bcf-bedd-714c0c160e08","type":"Grid"},{"id":"bc101b85-b43e-4551-b075-5d23c7f8006f","type":"GlyphRenderer"},{"id":"a6385448-11c1-4844-b949-c02d15a3e924","type":"GlyphRenderer"}],"title":{"id":"0d524bd1-7bb0-4d84-8745-3dc46bd8fec9","type":"Title"},"tool_events":{"id":"52dfdf59-09b4-4fba-b0ed-9bc4771866f8","type":"ToolEvents"},"toolbar":{"id":"7064f4e5-5748-4038-9524-2c472923e787","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"e0806667-a06f-4f6a-9913-d3fdd2197d71","type":"DataRange1d"},"y_range":{"id":"6b54e903-e8cb-427d-99c0-8f0a89f3b950","type":"DataRange1d"}},"id":"e185b02b-75e5-4143-9323-f05d97b9ae6b","subtype":"Figure","type":"Plot"},{"attributes":{"args":{"circle":{"id":"c7ec93c6-097e-45a6-9a31-83478f444cc2","type":"ColumnDataSource"},"segment":{"id":"bd3c65b4-8819-45cc-8cf6-51b144481587","type":"ColumnDataSource"}},"code":"\nvar links = {0: [1, 2], 1: [0, 3, 4], 2: [0, 5], 3: [1, 4], 4: [1, 3], 5: [2, 3, 4]};\nvar data = {'x0': [], 'y0': [], 'x1': [], 'y1': []};\nvar cdata = circle.data;\nvar indices = cb_data.index['1d'].indices;\nfor (i=0; i < indices.length; i++) {\n    ind0 = indices[i]\n    for (j=0; j < links[ind0].length; j++) {\n        ind1 = links[ind0][j];\n        data['x0'].push(cdata.x[ind0]);\n        data['y0'].push(cdata.y[ind0]);\n        data['x1'].push(cdata.x[ind1]);\n        data['y1'].push(cdata.y[ind1]);\n    }\n}\nsegment.data = data;\n"},"id":"f77849aa-35db-41b6-906c-bd9b6fa89f67","type":"CustomJS"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[2,3,5,6,8,7],"y":[6,4,3,8,7,5]}},"id":"c7ec93c6-097e-45a6-9a31-83478f444cc2","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"e0806667-a06f-4f6a-9913-d3fdd2197d71","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.4},"fill_color":{"value":"olive"},"line_alpha":{"value":0.4},"line_color":{"value":"olive"},"size":{"units":"screen","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"93ac2da0-a9ad-42d6-81c6-3454ae7ed4f3","type":"Circle"},{"attributes":{"formatter":{"id":"7b301c0b-aa5a-42d2-8828-23c29f1a526f","type":"BasicTickFormatter"},"plot":{"id":"e185b02b-75e5-4143-9323-f05d97b9ae6b","subtype":"Figure","type":"Plot"},"ticker":{"id":"425fb57d-552a-4311-95dd-01cc5721ecb0","type":"BasicTicker"}},"id":"c4d5a6ff-1b57-4586-8977-792318adaa2c","type":"LinearAxis"},{"attributes":{"callback":{"id":"f77849aa-35db-41b6-906c-bd9b6fa89f67","type":"CustomJS"},"plot":{"id":"e185b02b-75e5-4143-9323-f05d97b9ae6b","subtype":"Figure","type":"Plot"},"renderers":[{"id":"a6385448-11c1-4844-b949-c02d15a3e924","type":"GlyphRenderer"}],"tooltips":null},"id":"02c60ceb-2631-4af5-94d8-9deb3e6dd5f3","type":"HoverTool"},{"attributes":{},"id":"425fb57d-552a-4311-95dd-01cc5721ecb0","type":"BasicTicker"},{"attributes":{"plot":{"id":"e185b02b-75e5-4143-9323-f05d97b9ae6b","subtype":"Figure","type":"Plot"},"ticker":{"id":"afb9dd3d-9d9b-4480-843f-24366af86445","type":"BasicTicker"}},"id":"77de05d6-0740-42b2-8e82-4024dbe72846","type":"Grid"},{"attributes":{"data_source":{"id":"c7ec93c6-097e-45a6-9a31-83478f444cc2","type":"ColumnDataSource"},"glyph":{"id":"93ac2da0-a9ad-42d6-81c6-3454ae7ed4f3","type":"Circle"},"hover_glyph":{"id":"1ca69ad5-97e9-426a-a109-adacfcace5a6","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"cc731a41-839c-4a49-b5d8-20e313441414","type":"Circle"},"selection_glyph":null},"id":"a6385448-11c1-4844-b949-c02d15a3e924","type":"GlyphRenderer"},{"attributes":{},"id":"52dfdf59-09b4-4fba-b0ed-9bc4771866f8","type":"ToolEvents"},{"attributes":{"data_source":{"id":"bd3c65b4-8819-45cc-8cf6-51b144481587","type":"ColumnDataSource"},"glyph":{"id":"fef8f21e-33c1-4a56-9b81-8e7edc1f2d71","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"71e86ce4-03c8-4b03-a1d5-4246cdda4705","type":"Segment"},"selection_glyph":null},"id":"bc101b85-b43e-4551-b075-5d23c7f8006f","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"7f83aaee-6628-4146-96c8-d3898122457f","type":"BasicTickFormatter"},"plot":{"id":"e185b02b-75e5-4143-9323-f05d97b9ae6b","subtype":"Figure","type":"Plot"},"ticker":{"id":"afb9dd3d-9d9b-4480-843f-24366af86445","type":"BasicTicker"}},"id":"532cbcf5-95fa-40c7-b5c0-016b236e086a","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"e185b02b-75e5-4143-9323-f05d97b9ae6b","subtype":"Figure","type":"Plot"},"ticker":{"id":"425fb57d-552a-4311-95dd-01cc5721ecb0","type":"BasicTicker"}},"id":"894c72ed-7062-4bcf-bedd-714c0c160e08","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"02c60ceb-2631-4af5-94d8-9deb3e6dd5f3","type":"HoverTool"}]},"id":"7064f4e5-5748-4038-9524-2c472923e787","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["x0","x1","y1","y0"],"data":{"x0":[],"x1":[],"y0":[],"y1":[]}},"id":"bd3c65b4-8819-45cc-8cf6-51b144481587","type":"ColumnDataSource"},{"attributes":{},"id":"afb9dd3d-9d9b-4480-843f-24366af86445","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"cc731a41-839c-4a49-b5d8-20e313441414","type":"Circle"},{"attributes":{"fill_color":{"value":"olive"},"line_color":{"value":"olive"},"size":{"units":"screen","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"1ca69ad5-97e9-426a-a109-adacfcace5a6","type":"Circle"},{"attributes":{},"id":"7b301c0b-aa5a-42d2-8828-23c29f1a526f","type":"BasicTickFormatter"},{"attributes":{"line_alpha":{"value":0.6},"line_color":{"value":"olive"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"fef8f21e-33c1-4a56-9b81-8e7edc1f2d71","type":"Segment"}],"root_ids":["e185b02b-75e5-4143-9323-f05d97b9ae6b"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"b8522f21-8c86-4eae-8a0a-a63250b138ca","elementid":"d91c736e-0ec0-47fa-a458-1dbca6ecc2a6","modelid":"e185b02b-75e5-4143-9323-f05d97b9ae6b"}];
                
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
