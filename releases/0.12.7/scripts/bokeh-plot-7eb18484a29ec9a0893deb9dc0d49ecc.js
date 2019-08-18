(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("219ac3af-dbae-4723-8932-ffeecfc0c71b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '219ac3af-dbae-4723-8932-ffeecfc0c71b' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.7.min.js"];
    
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
                var docs_json = {"f0eebf84-cb84-4337-b4b0-16da7ed3814f":{"roots":{"references":[{"attributes":{},"id":"e8503b86-d7e3-40c2-bcb8-1d2acd92bef5","type":"LinearScale"},{"attributes":{"below":[{"id":"592b18c8-cf0b-4113-b982-f72edd51ecb6","type":"LinearAxis"}],"left":[{"id":"91bcb293-fb95-4e09-895e-68a81e911676","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"592b18c8-cf0b-4113-b982-f72edd51ecb6","type":"LinearAxis"},{"id":"65da2ab9-941d-418f-9056-60b71b00b8c5","type":"Grid"},{"id":"91bcb293-fb95-4e09-895e-68a81e911676","type":"LinearAxis"},{"id":"050749dd-3551-438c-bff0-c58ac8aaa573","type":"Grid"},{"id":"e8df4d5a-1837-4ae6-bbb0-ffb59453cb22","type":"BoxAnnotation"},{"id":"0a2cb7a9-d067-4cbb-ae67-da5d8e5b68d3","type":"GlyphRenderer"},{"id":"df075ed6-6ac5-4542-9455-6619087c0075","type":"GlyphRenderer"}],"title":{"id":"09b5f918-c0eb-42ff-9825-43aac06d8f04","type":"Title"},"toolbar":{"id":"d5fdb5d6-7155-4ac3-a6e4-13e89c4f9466","type":"Toolbar"},"x_range":{"id":"f09608b6-ce66-4221-a0c2-b200fec938cd","type":"DataRange1d"},"x_scale":{"id":"5d067ec7-f969-4779-85b4-d46f9830f956","type":"LinearScale"},"y_range":{"id":"0acd0f88-d2e1-49b5-bf84-c913a02ba445","type":"DataRange1d"},"y_scale":{"id":"e8503b86-d7e3-40c2-bcb8-1d2acd92bef5","type":"LinearScale"}},"id":"008d51bf-5d3e-4e4c-b068-b84d2abaf52a","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"0acd0f88-d2e1-49b5-bf84-c913a02ba445","type":"DataRange1d"},{"attributes":{"data_source":{"id":"7e37b568-3cca-43ec-a5e6-cd5a5be9c89a","type":"ColumnDataSource"},"glyph":{"id":"f7e1b97d-6ddd-4e0e-9ac9-779d6a6f1ef6","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ae27184f-f19d-4979-b948-8e6ce7a03d6c","type":"Line"},"selection_glyph":null,"view":{"id":"d63480ea-e2ac-425a-b1d4-de72b6077679","type":"CDSView"}},"id":"0a2cb7a9-d067-4cbb-ae67-da5d8e5b68d3","type":"GlyphRenderer"},{"attributes":{},"id":"a3d46f6d-ba24-461c-bd6e-d171967afae3","type":"BasicTicker"},{"attributes":{"callback":null},"id":"f09608b6-ce66-4221-a0c2-b200fec938cd","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"7b694617-53e3-480e-89cd-2ff561b9630b","type":"PanTool"},{"id":"56fb23e0-025f-4368-9970-1816e7c0c3d7","type":"WheelZoomTool"},{"id":"245a21e9-259c-4442-841c-36a9de2e1342","type":"BoxZoomTool"},{"id":"4adae254-5521-4715-959d-d07d760694ec","type":"SaveTool"},{"id":"83d55a2d-7eac-4b1c-bf61-c439154bf4bd","type":"ResetTool"},{"id":"b6579f22-a833-478e-8645-ebd25d9199ca","type":"HelpTool"}]},"id":"d5fdb5d6-7155-4ac3-a6e4-13e89c4f9466","type":"Toolbar"},{"attributes":{},"id":"4adae254-5521-4715-959d-d07d760694ec","type":"SaveTool"},{"attributes":{},"id":"5d067ec7-f969-4779-85b4-d46f9830f956","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"09b5f918-c0eb-42ff-9825-43aac06d8f04","type":"Title"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,8,7,3]}},"id":"daa14163-e134-4292-84da-5011bffda7f0","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"008d51bf-5d3e-4e4c-b068-b84d2abaf52a","subtype":"Figure","type":"Plot"},"ticker":{"id":"6092237a-d46b-4ffd-857f-da34f8b73122","type":"BasicTicker"}},"id":"65da2ab9-941d-418f-9056-60b71b00b8c5","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"e8df4d5a-1837-4ae6-bbb0-ffb59453cb22","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"4064fee4-b1e0-4af9-990e-59bebb46aa47","type":"BasicTickFormatter"},"plot":{"id":"008d51bf-5d3e-4e4c-b068-b84d2abaf52a","subtype":"Figure","type":"Plot"},"ticker":{"id":"a3d46f6d-ba24-461c-bd6e-d171967afae3","type":"BasicTicker"}},"id":"91bcb293-fb95-4e09-895e-68a81e911676","type":"LinearAxis"},{"attributes":{},"id":"4064fee4-b1e0-4af9-990e-59bebb46aa47","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,8,7,3]}},"id":"7e37b568-3cca-43ec-a5e6-cd5a5be9c89a","type":"ColumnDataSource"},{"attributes":{"source":{"id":"7e37b568-3cca-43ec-a5e6-cd5a5be9c89a","type":"ColumnDataSource"}},"id":"d63480ea-e2ac-425a-b1d4-de72b6077679","type":"CDSView"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"ae27184f-f19d-4979-b948-8e6ce7a03d6c","type":"Line"},{"attributes":{},"id":"83d55a2d-7eac-4b1c-bf61-c439154bf4bd","type":"ResetTool"},{"attributes":{},"id":"56fb23e0-025f-4368-9970-1816e7c0c3d7","type":"WheelZoomTool"},{"attributes":{"source":{"id":"daa14163-e134-4292-84da-5011bffda7f0","type":"ColumnDataSource"}},"id":"b40214fb-6770-4b94-a222-adc9b8a90edb","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"008d51bf-5d3e-4e4c-b068-b84d2abaf52a","subtype":"Figure","type":"Plot"},"ticker":{"id":"a3d46f6d-ba24-461c-bd6e-d171967afae3","type":"BasicTicker"}},"id":"050749dd-3551-438c-bff0-c58ac8aaa573","type":"Grid"},{"attributes":{},"id":"6092237a-d46b-4ffd-857f-da34f8b73122","type":"BasicTicker"},{"attributes":{"overlay":{"id":"e8df4d5a-1837-4ae6-bbb0-ffb59453cb22","type":"BoxAnnotation"}},"id":"245a21e9-259c-4442-841c-36a9de2e1342","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"6295f754-8b40-455a-b740-f5cff503498e","type":"BasicTickFormatter"},"plot":{"id":"008d51bf-5d3e-4e4c-b068-b84d2abaf52a","subtype":"Figure","type":"Plot"},"ticker":{"id":"6092237a-d46b-4ffd-857f-da34f8b73122","type":"BasicTicker"}},"id":"592b18c8-cf0b-4113-b982-f72edd51ecb6","type":"LinearAxis"},{"attributes":{},"id":"7b694617-53e3-480e-89cd-2ff561b9630b","type":"PanTool"},{"attributes":{},"id":"6295f754-8b40-455a-b740-f5cff503498e","type":"BasicTickFormatter"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"f7e1b97d-6ddd-4e0e-9ac9-779d6a6f1ef6","type":"Line"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"cae4f8a8-b016-4596-aea1-3b9053e20131","type":"Circle"},{"attributes":{"data_source":{"id":"daa14163-e134-4292-84da-5011bffda7f0","type":"ColumnDataSource"},"glyph":{"id":"cae4f8a8-b016-4596-aea1-3b9053e20131","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0ddc1b94-8a60-4500-8465-4a829f731ea0","type":"Circle"},"selection_glyph":null,"view":{"id":"b40214fb-6770-4b94-a222-adc9b8a90edb","type":"CDSView"}},"id":"df075ed6-6ac5-4542-9455-6619087c0075","type":"GlyphRenderer"},{"attributes":{},"id":"b6579f22-a833-478e-8645-ebd25d9199ca","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"0ddc1b94-8a60-4500-8465-4a829f731ea0","type":"Circle"}],"root_ids":["008d51bf-5d3e-4e4c-b068-b84d2abaf52a"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"f0eebf84-cb84-4337-b4b0-16da7ed3814f","elementid":"219ac3af-dbae-4723-8932-ffeecfc0c71b","modelid":"008d51bf-5d3e-4e4c-b068-b84d2abaf52a"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
