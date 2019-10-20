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
      };var element = document.getElementById("608da8fe-28a4-441e-a344-3d0eaabf8f40");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '608da8fe-28a4-441e-a344-3d0eaabf8f40' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.13.0.min.js"];
    
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
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"a0f44138-49fa-4b8e-af07-cd79faaae142":{"roots":{"references":[{"attributes":{},"id":"4e8607b9-a34b-447f-88d3-7b4de9ee9cf0","type":"BasicTicker"},{"attributes":{},"id":"1896c7fd-9e31-4644-8fbd-a761095b90d1","type":"Selection"},{"attributes":{},"id":"794bbc83-47ef-4d58-986b-b7ca693571cc","type":"BasicTickFormatter"},{"attributes":{},"id":"b3d6437e-441d-4e38-a494-f26c8441f7c4","type":"HelpTool"},{"attributes":{"source":{"id":"b82edc5b-dfe0-4c19-92e5-f842b6763d8c","type":"ColumnDataSource"}},"id":"c73077a7-5977-4941-8151-ddd6fd457625","type":"CDSView"},{"attributes":{},"id":"bda298d8-3a40-4b49-ad72-9264ba522b02","type":"ResetTool"},{"attributes":{},"id":"59dc45ca-f5b0-4c36-85dc-4e7671fd885e","type":"SaveTool"},{"attributes":{"below":[{"id":"74135298-3303-4575-a1e5-a45282d19aad","type":"LinearAxis"}],"left":[{"id":"2df99f8c-c6ba-4431-9659-1119e8ff8cfe","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"74135298-3303-4575-a1e5-a45282d19aad","type":"LinearAxis"},{"id":"93a17b48-b155-45f1-9f55-f058fa31f31a","type":"Grid"},{"id":"2df99f8c-c6ba-4431-9659-1119e8ff8cfe","type":"LinearAxis"},{"id":"b0900e1a-746f-4578-b6d2-5bc58255ebc3","type":"Grid"},{"id":"62808864-9b23-4f06-b1e4-505a215bc56b","type":"BoxAnnotation"},{"id":"df1ba89f-e1ae-4eb0-85eb-d07d1e705666","type":"GlyphRenderer"}],"title":{"id":"a0f2609e-b6c8-4ec5-afe2-d3333daa266f","type":"Title"},"toolbar":{"id":"d3cf16bb-b9d1-46a7-a37c-3ba3bfa505f0","type":"Toolbar"},"x_range":{"id":"a055a6eb-10a8-4a37-848b-ffa7b6966e1f","type":"DataRange1d"},"x_scale":{"id":"18c5af32-608e-4526-b281-8b5d2fdc240a","type":"LinearScale"},"y_range":{"id":"e49e40af-f56c-4fde-9809-bfc176dc27b1","type":"DataRange1d"},"y_scale":{"id":"245934c9-cd5b-4b24-894c-dfe338901800","type":"LinearScale"}},"id":"1ad6fc76-a5da-43ee-a8f5-2491d0d5f455","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"62808864-9b23-4f06-b1e4-505a215bc56b","type":"BoxAnnotation"}},"id":"b6483229-67ae-433e-90a7-944f7ab9e55b","type":"BoxZoomTool"},{"attributes":{"callback":null,"data":{"right":[1,2,3],"y":[1,2,3]},"selected":{"id":"1896c7fd-9e31-4644-8fbd-a761095b90d1","type":"Selection"},"selection_policy":{"id":"cfc7c60a-d814-4281-a1e3-030e135a3f6b","type":"UnionRenderers"}},"id":"b82edc5b-dfe0-4c19-92e5-f842b6763d8c","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"7731bec6-eb48-4ee8-9049-005f8a17d81b","type":"PanTool"},{"id":"e16ba432-be1a-4c9a-b068-b0d0fff6cd8f","type":"WheelZoomTool"},{"id":"b6483229-67ae-433e-90a7-944f7ab9e55b","type":"BoxZoomTool"},{"id":"59dc45ca-f5b0-4c36-85dc-4e7671fd885e","type":"SaveTool"},{"id":"bda298d8-3a40-4b49-ad72-9264ba522b02","type":"ResetTool"},{"id":"b3d6437e-441d-4e38-a494-f26c8441f7c4","type":"HelpTool"}]},"id":"d3cf16bb-b9d1-46a7-a37c-3ba3bfa505f0","type":"Toolbar"},{"attributes":{},"id":"e16ba432-be1a-4c9a-b068-b0d0fff6cd8f","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"a055a6eb-10a8-4a37-848b-ffa7b6966e1f","type":"DataRange1d"},{"attributes":{},"id":"7731bec6-eb48-4ee8-9049-005f8a17d81b","type":"PanTool"},{"attributes":{},"id":"2b5dea94-aaaf-41f4-80fa-250eecde87c0","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"62808864-9b23-4f06-b1e4-505a215bc56b","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":""},"id":"a0f2609e-b6c8-4ec5-afe2-d3333daa266f","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.5},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"right"},"y":{"field":"y"}},"id":"2055f4fc-0050-48c8-b68c-2098556d3f38","type":"HBar"},{"attributes":{"fill_color":{"value":"#CAB2D6"},"height":{"value":0.5},"line_color":{"value":"#CAB2D6"},"right":{"field":"right"},"y":{"field":"y"}},"id":"35f5dabe-f6b0-4b66-a2b3-c4f3a84730dc","type":"HBar"},{"attributes":{"callback":null},"id":"e49e40af-f56c-4fde-9809-bfc176dc27b1","type":"DataRange1d"},{"attributes":{"data_source":{"id":"b82edc5b-dfe0-4c19-92e5-f842b6763d8c","type":"ColumnDataSource"},"glyph":{"id":"35f5dabe-f6b0-4b66-a2b3-c4f3a84730dc","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2055f4fc-0050-48c8-b68c-2098556d3f38","type":"HBar"},"selection_glyph":null,"view":{"id":"c73077a7-5977-4941-8151-ddd6fd457625","type":"CDSView"}},"id":"df1ba89f-e1ae-4eb0-85eb-d07d1e705666","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"794bbc83-47ef-4d58-986b-b7ca693571cc","type":"BasicTickFormatter"},"plot":{"id":"1ad6fc76-a5da-43ee-a8f5-2491d0d5f455","subtype":"Figure","type":"Plot"},"ticker":{"id":"204b9a3d-08c1-4065-a65a-344cd12b2985","type":"BasicTicker"}},"id":"2df99f8c-c6ba-4431-9659-1119e8ff8cfe","type":"LinearAxis"},{"attributes":{},"id":"cfc7c60a-d814-4281-a1e3-030e135a3f6b","type":"UnionRenderers"},{"attributes":{"dimension":1,"plot":{"id":"1ad6fc76-a5da-43ee-a8f5-2491d0d5f455","subtype":"Figure","type":"Plot"},"ticker":{"id":"204b9a3d-08c1-4065-a65a-344cd12b2985","type":"BasicTicker"}},"id":"b0900e1a-746f-4578-b6d2-5bc58255ebc3","type":"Grid"},{"attributes":{},"id":"18c5af32-608e-4526-b281-8b5d2fdc240a","type":"LinearScale"},{"attributes":{},"id":"204b9a3d-08c1-4065-a65a-344cd12b2985","type":"BasicTicker"},{"attributes":{},"id":"245934c9-cd5b-4b24-894c-dfe338901800","type":"LinearScale"},{"attributes":{"plot":{"id":"1ad6fc76-a5da-43ee-a8f5-2491d0d5f455","subtype":"Figure","type":"Plot"},"ticker":{"id":"4e8607b9-a34b-447f-88d3-7b4de9ee9cf0","type":"BasicTicker"}},"id":"93a17b48-b155-45f1-9f55-f058fa31f31a","type":"Grid"},{"attributes":{"formatter":{"id":"2b5dea94-aaaf-41f4-80fa-250eecde87c0","type":"BasicTickFormatter"},"plot":{"id":"1ad6fc76-a5da-43ee-a8f5-2491d0d5f455","subtype":"Figure","type":"Plot"},"ticker":{"id":"4e8607b9-a34b-447f-88d3-7b4de9ee9cf0","type":"BasicTicker"}},"id":"74135298-3303-4575-a1e5-a45282d19aad","type":"LinearAxis"}],"root_ids":["1ad6fc76-a5da-43ee-a8f5-2491d0d5f455"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"a0f44138-49fa-4b8e-af07-cd79faaae142","roots":{"1ad6fc76-a5da-43ee-a8f5-2491d0d5f455":"608da8fe-28a4-441e-a344-3d0eaabf8f40"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
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