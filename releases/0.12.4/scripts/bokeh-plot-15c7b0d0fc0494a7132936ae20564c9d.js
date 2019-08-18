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
      };var element = document.getElementById("77ca854d-6489-40bd-b061-62f4ea478eb7");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '77ca854d-6489-40bd-b061-62f4ea478eb7' but no matching script tag was found. ")
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
                var docs_json = {"36470aae-55ca-47ba-965a-49eebc555188":{"roots":{"references":[{"attributes":{"plot":null,"text":"Hover over points"},"id":"9d163213-6e65-41f5-a6cd-9e3249460c77","type":"Title"},{"attributes":{"fill_alpha":{"value":0.4},"fill_color":{"value":"olive"},"line_alpha":{"value":0.4},"line_color":{"value":"olive"},"size":{"units":"screen","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"15bc869c-ddeb-4ef3-932c-a8ad1be756a8","type":"Circle"},{"attributes":{"callback":{"id":"48e2343f-779b-4f74-a4a1-7060e54bba38","type":"CustomJS"},"plot":{"id":"8fc45905-fdad-43fc-8c10-325b7f86d914","subtype":"Figure","type":"Plot"},"renderers":[{"id":"127fa7ac-26d4-411f-9ec7-c9089a27d82a","type":"GlyphRenderer"}],"tooltips":null},"id":"44babc8d-52f7-45c5-aff3-e13be517b284","type":"HoverTool"},{"attributes":{"callback":null},"id":"a24fc032-600a-4261-ae0d-25bc5c0c8e5b","type":"DataRange1d"},{"attributes":{"data_source":{"id":"ad1f2e0c-1ef1-4190-a9b1-c6ebe4cc0ca7","type":"ColumnDataSource"},"glyph":{"id":"15bc869c-ddeb-4ef3-932c-a8ad1be756a8","type":"Circle"},"hover_glyph":{"id":"b8f70a90-de22-437c-a01d-d0cb48cae5d5","type":"Circle"},"nonselection_glyph":{"id":"67efd00e-0b5e-442d-b0e9-40245b34d15d","type":"Circle"},"selection_glyph":null},"id":"127fa7ac-26d4-411f-9ec7-c9089a27d82a","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"67efd00e-0b5e-442d-b0e9-40245b34d15d","type":"Circle"},{"attributes":{"formatter":{"id":"201a6b1b-6ce4-4957-8f46-4db166a0cca9","type":"BasicTickFormatter"},"plot":{"id":"8fc45905-fdad-43fc-8c10-325b7f86d914","subtype":"Figure","type":"Plot"},"ticker":{"id":"c1af77b2-7f92-4436-b1c3-d9cb00d150c4","type":"BasicTicker"}},"id":"442aede8-34ba-4dde-abe3-6f69aa0355f2","type":"LinearAxis"},{"attributes":{},"id":"201a6b1b-6ce4-4957-8f46-4db166a0cca9","type":"BasicTickFormatter"},{"attributes":{"line_alpha":{"value":0.6},"line_color":{"value":"olive"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"bd157844-f751-45e7-a7a5-fb86a896854b","type":"Segment"},{"attributes":{"args":{"circle":{"id":"ad1f2e0c-1ef1-4190-a9b1-c6ebe4cc0ca7","type":"ColumnDataSource"},"segment":{"id":"4623f38c-478b-4f95-8fe6-5f55b8cc157b","type":"ColumnDataSource"}},"code":"\nvar links = {0: [1, 2], 1: [0, 3, 4], 2: [0, 5], 3: [1, 4], 4: [1, 3], 5: [2, 3, 4]};\nvar data = {'x0': [], 'y0': [], 'x1': [], 'y1': []};\nvar cdata = circle.data;\nvar indices = cb_data.index['1d'].indices;\nfor (i=0; i < indices.length; i++) {\n    ind0 = indices[i]\n    for (j=0; j < links[ind0].length; j++) {\n        ind1 = links[ind0][j];\n        data['x0'].push(cdata.x[ind0]);\n        data['y0'].push(cdata.y[ind0]);\n        data['x1'].push(cdata.x[ind1]);\n        data['y1'].push(cdata.y[ind1]);\n    }\n}\nsegment.data = data;\n"},"id":"48e2343f-779b-4f74-a4a1-7060e54bba38","type":"CustomJS"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[2,3,5,6,8,7],"y":[6,4,3,8,7,5]}},"id":"ad1f2e0c-1ef1-4190-a9b1-c6ebe4cc0ca7","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"44babc8d-52f7-45c5-aff3-e13be517b284","type":"HoverTool"}]},"id":"9ddbdbb1-279b-4710-a2a7-cdc034edbf09","type":"Toolbar"},{"attributes":{"plot":{"id":"8fc45905-fdad-43fc-8c10-325b7f86d914","subtype":"Figure","type":"Plot"},"ticker":{"id":"2f20572c-ebe8-48ab-97a1-d5e4be9cf9d4","type":"BasicTicker"}},"id":"a26ebec2-1f8a-4f75-aa1f-55931d008ce6","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"8fc45905-fdad-43fc-8c10-325b7f86d914","subtype":"Figure","type":"Plot"},"ticker":{"id":"c1af77b2-7f92-4436-b1c3-d9cb00d150c4","type":"BasicTicker"}},"id":"b9a0882a-92f1-4198-ad25-a2925a766a36","type":"Grid"},{"attributes":{"formatter":{"id":"00d88aba-d105-49a9-b585-3f26a08163c4","type":"BasicTickFormatter"},"plot":{"id":"8fc45905-fdad-43fc-8c10-325b7f86d914","subtype":"Figure","type":"Plot"},"ticker":{"id":"2f20572c-ebe8-48ab-97a1-d5e4be9cf9d4","type":"BasicTicker"}},"id":"ad345b1a-28e9-46b9-b9b1-d9475c2ba246","type":"LinearAxis"},{"attributes":{"callback":null},"id":"73ff2524-e21b-4c48-8f2f-49d99aba915d","type":"DataRange1d"},{"attributes":{},"id":"00d88aba-d105-49a9-b585-3f26a08163c4","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x0","x1","y1","y0"],"data":{"x0":[],"x1":[],"y0":[],"y1":[]}},"id":"4623f38c-478b-4f95-8fe6-5f55b8cc157b","type":"ColumnDataSource"},{"attributes":{},"id":"c1af77b2-7f92-4436-b1c3-d9cb00d150c4","type":"BasicTicker"},{"attributes":{},"id":"7b827617-b456-438c-9532-429cf9600045","type":"ToolEvents"},{"attributes":{"fill_color":{"value":"olive"},"line_color":{"value":"olive"},"size":{"units":"screen","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"b8f70a90-de22-437c-a01d-d0cb48cae5d5","type":"Circle"},{"attributes":{"below":[{"id":"ad345b1a-28e9-46b9-b9b1-d9475c2ba246","type":"LinearAxis"}],"left":[{"id":"442aede8-34ba-4dde-abe3-6f69aa0355f2","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"ad345b1a-28e9-46b9-b9b1-d9475c2ba246","type":"LinearAxis"},{"id":"a26ebec2-1f8a-4f75-aa1f-55931d008ce6","type":"Grid"},{"id":"442aede8-34ba-4dde-abe3-6f69aa0355f2","type":"LinearAxis"},{"id":"b9a0882a-92f1-4198-ad25-a2925a766a36","type":"Grid"},{"id":"d20f39b7-b678-4c52-9858-1ec3516faa7a","type":"GlyphRenderer"},{"id":"127fa7ac-26d4-411f-9ec7-c9089a27d82a","type":"GlyphRenderer"}],"title":{"id":"9d163213-6e65-41f5-a6cd-9e3249460c77","type":"Title"},"tool_events":{"id":"7b827617-b456-438c-9532-429cf9600045","type":"ToolEvents"},"toolbar":{"id":"9ddbdbb1-279b-4710-a2a7-cdc034edbf09","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"a24fc032-600a-4261-ae0d-25bc5c0c8e5b","type":"DataRange1d"},"y_range":{"id":"73ff2524-e21b-4c48-8f2f-49d99aba915d","type":"DataRange1d"}},"id":"8fc45905-fdad-43fc-8c10-325b7f86d914","subtype":"Figure","type":"Plot"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"f367eb8f-c717-48ad-8200-d33185e12860","type":"Segment"},{"attributes":{"data_source":{"id":"4623f38c-478b-4f95-8fe6-5f55b8cc157b","type":"ColumnDataSource"},"glyph":{"id":"bd157844-f751-45e7-a7a5-fb86a896854b","type":"Segment"},"hover_glyph":null,"nonselection_glyph":{"id":"f367eb8f-c717-48ad-8200-d33185e12860","type":"Segment"},"selection_glyph":null},"id":"d20f39b7-b678-4c52-9858-1ec3516faa7a","type":"GlyphRenderer"},{"attributes":{},"id":"2f20572c-ebe8-48ab-97a1-d5e4be9cf9d4","type":"BasicTicker"}],"root_ids":["8fc45905-fdad-43fc-8c10-325b7f86d914"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"36470aae-55ca-47ba-965a-49eebc555188","elementid":"77ca854d-6489-40bd-b061-62f4ea478eb7","modelid":"8fc45905-fdad-43fc-8c10-325b7f86d914"}];
                
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
