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
      };var element = document.getElementById("f50b33f7-d846-47db-95ea-9faab1f7722e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f50b33f7-d846-47db-95ea-9faab1f7722e' but no matching script tag was found. ")
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
                var docs_json = {"31e0b9a2-8f88-4ddd-a696-d12abb74807e":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,"NaN",4,5,6],"y":[6,7,5,"NaN",7,3,6]}},"id":"ce81d32e-24d7-412e-b132-5bab88a4fcea","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"865bcf04-449c-43ca-986e-eb59fabe1ade","subtype":"Figure","type":"Plot"},"ticker":{"id":"a0b461e8-4135-45aa-9a2f-ca420368aa4b","type":"BasicTicker"}},"id":"462af26c-4949-4d87-911b-e4f44239b1f3","type":"Grid"},{"attributes":{},"id":"98936005-c705-4ba0-9452-a5e551dd0dba","type":"LinearScale"},{"attributes":{},"id":"a0a7981b-f111-4407-99ad-b34e28a1bbcc","type":"LinearScale"},{"attributes":{"callback":null},"id":"a16ec3b3-128a-4c3b-9d65-5fc1560945d5","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"a5a56ac5-9108-42c7-8878-5c1a30d91eea","type":"PanTool"},{"id":"54f7508e-0fd3-43b9-bb7e-639d4184ca34","type":"WheelZoomTool"},{"id":"affd235a-9539-4509-9b12-143b17897f05","type":"BoxZoomTool"},{"id":"790320e8-9803-4de6-bd8a-c47aa7017cbd","type":"SaveTool"},{"id":"b90ddf06-4b10-4b0b-9890-965d6d0c7796","type":"ResetTool"},{"id":"bfd3225e-eef0-4b66-a1e6-ff02a0bd5d1c","type":"HelpTool"}]},"id":"bbc937e9-c8f9-44ca-82d7-be3891c671bc","type":"Toolbar"},{"attributes":{},"id":"4cf7d68d-8a9e-4d28-a26c-7e85898acb6c","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"e70dfeae-da6e-4001-9d9b-b0b291fd33a6","type":"Patch"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"ae58c1c2-d630-4167-b2ec-a5a0d35a9f21","type":"Patch"},{"attributes":{},"id":"bfd3225e-eef0-4b66-a1e6-ff02a0bd5d1c","type":"HelpTool"},{"attributes":{},"id":"c98ae5cf-3c0c-4854-93de-8238a867eb72","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"4cf7d68d-8a9e-4d28-a26c-7e85898acb6c","type":"BasicTickFormatter"},"plot":{"id":"865bcf04-449c-43ca-986e-eb59fabe1ade","subtype":"Figure","type":"Plot"},"ticker":{"id":"d5dc92f2-8094-4f53-8b32-9476c80c698d","type":"BasicTicker"}},"id":"e4b27974-cb8a-4f05-8fe9-405f5367aaf0","type":"LinearAxis"},{"attributes":{},"id":"b90ddf06-4b10-4b0b-9890-965d6d0c7796","type":"ResetTool"},{"attributes":{"formatter":{"id":"c98ae5cf-3c0c-4854-93de-8238a867eb72","type":"BasicTickFormatter"},"plot":{"id":"865bcf04-449c-43ca-986e-eb59fabe1ade","subtype":"Figure","type":"Plot"},"ticker":{"id":"a0b461e8-4135-45aa-9a2f-ca420368aa4b","type":"BasicTicker"}},"id":"b26dd01b-674a-444b-af18-f8a045a5869b","type":"LinearAxis"},{"attributes":{"data_source":{"id":"ce81d32e-24d7-412e-b132-5bab88a4fcea","type":"ColumnDataSource"},"glyph":{"id":"ae58c1c2-d630-4167-b2ec-a5a0d35a9f21","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e70dfeae-da6e-4001-9d9b-b0b291fd33a6","type":"Patch"},"selection_glyph":null,"view":{"id":"140811e6-9018-45ae-9a5e-5e396bb28d8b","type":"CDSView"}},"id":"da8ff124-3d60-4b4b-a4ee-08ea239ef25f","type":"GlyphRenderer"},{"attributes":{},"id":"d5dc92f2-8094-4f53-8b32-9476c80c698d","type":"BasicTicker"},{"attributes":{"plot":{"id":"865bcf04-449c-43ca-986e-eb59fabe1ade","subtype":"Figure","type":"Plot"},"ticker":{"id":"d5dc92f2-8094-4f53-8b32-9476c80c698d","type":"BasicTicker"}},"id":"83d23e8a-c846-4517-9c12-fe388b6e98dc","type":"Grid"},{"attributes":{},"id":"790320e8-9803-4de6-bd8a-c47aa7017cbd","type":"SaveTool"},{"attributes":{"plot":null,"text":""},"id":"5e389cbe-45a2-41bf-92a2-f5e701119274","type":"Title"},{"attributes":{},"id":"54f7508e-0fd3-43b9-bb7e-639d4184ca34","type":"WheelZoomTool"},{"attributes":{"source":{"id":"ce81d32e-24d7-412e-b132-5bab88a4fcea","type":"ColumnDataSource"}},"id":"140811e6-9018-45ae-9a5e-5e396bb28d8b","type":"CDSView"},{"attributes":{"below":[{"id":"e4b27974-cb8a-4f05-8fe9-405f5367aaf0","type":"LinearAxis"}],"left":[{"id":"b26dd01b-674a-444b-af18-f8a045a5869b","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"e4b27974-cb8a-4f05-8fe9-405f5367aaf0","type":"LinearAxis"},{"id":"83d23e8a-c846-4517-9c12-fe388b6e98dc","type":"Grid"},{"id":"b26dd01b-674a-444b-af18-f8a045a5869b","type":"LinearAxis"},{"id":"462af26c-4949-4d87-911b-e4f44239b1f3","type":"Grid"},{"id":"2d9f9f93-4c3e-447e-93e3-a07393f6df88","type":"BoxAnnotation"},{"id":"da8ff124-3d60-4b4b-a4ee-08ea239ef25f","type":"GlyphRenderer"}],"title":{"id":"5e389cbe-45a2-41bf-92a2-f5e701119274","type":"Title"},"toolbar":{"id":"bbc937e9-c8f9-44ca-82d7-be3891c671bc","type":"Toolbar"},"x_range":{"id":"a16ec3b3-128a-4c3b-9d65-5fc1560945d5","type":"DataRange1d"},"x_scale":{"id":"98936005-c705-4ba0-9452-a5e551dd0dba","type":"LinearScale"},"y_range":{"id":"a1ecae73-321a-4c54-a627-95c7c11a8030","type":"DataRange1d"},"y_scale":{"id":"a0a7981b-f111-4407-99ad-b34e28a1bbcc","type":"LinearScale"}},"id":"865bcf04-449c-43ca-986e-eb59fabe1ade","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"2d9f9f93-4c3e-447e-93e3-a07393f6df88","type":"BoxAnnotation"}},"id":"affd235a-9539-4509-9b12-143b17897f05","type":"BoxZoomTool"},{"attributes":{},"id":"a5a56ac5-9108-42c7-8878-5c1a30d91eea","type":"PanTool"},{"attributes":{},"id":"a0b461e8-4135-45aa-9a2f-ca420368aa4b","type":"BasicTicker"},{"attributes":{"callback":null},"id":"a1ecae73-321a-4c54-a627-95c7c11a8030","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"2d9f9f93-4c3e-447e-93e3-a07393f6df88","type":"BoxAnnotation"}],"root_ids":["865bcf04-449c-43ca-986e-eb59fabe1ade"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"31e0b9a2-8f88-4ddd-a696-d12abb74807e","elementid":"f50b33f7-d846-47db-95ea-9faab1f7722e","modelid":"865bcf04-449c-43ca-986e-eb59fabe1ade"}];
                
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
