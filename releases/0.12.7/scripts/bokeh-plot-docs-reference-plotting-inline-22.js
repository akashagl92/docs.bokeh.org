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
      };var element = document.getElementById("fb99e665-7ed8-42c5-b3a8-6ea035568d12");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'fb99e665-7ed8-42c5-b3a8-6ea035568d12' but no matching script tag was found. ")
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
                var docs_json = {"5147c3cf-5aa6-4288-bed1-26cec422f37c":{"roots":{"references":[{"attributes":{},"id":"9afd0cb0-46c2-4127-997a-b45b4d4f6b80","type":"BasicTickFormatter"},{"attributes":{},"id":"d7543ae5-ffa6-4da7-b07b-aebc66605a41","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"880374eb-efa0-4c57-837e-c3d55cbc436f","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"880374eb-efa0-4c57-837e-c3d55cbc436f","type":"BoxAnnotation"}},"id":"59f7a1d1-459c-45e8-b214-9f1c6cb40199","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"9afd0cb0-46c2-4127-997a-b45b4d4f6b80","type":"BasicTickFormatter"},"plot":{"id":"b57cd7bd-0173-4b4d-995a-eee845253393","subtype":"Figure","type":"Plot"},"ticker":{"id":"af4b8eea-31cf-476b-a9c8-33e4803ef4f2","type":"BasicTicker"}},"id":"3f5e9e03-3e7b-4d45-9030-00aa17d4ad6b","type":"LinearAxis"},{"attributes":{},"id":"520c7839-85f1-4e68-bbe3-fe8de3ce3d77","type":"HelpTool"},{"attributes":{"callback":null},"id":"74b901c6-6f5a-4c49-a15d-8e1972af360b","type":"DataRange1d"},{"attributes":{},"id":"33e24a44-d8ad-4e2d-9599-957d28cc5ca3","type":"ResetTool"},{"attributes":{},"id":"0834b3b6-6a96-4bb9-8f15-0ea57b62363a","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"f39ca67d-fee6-4535-a2f3-09917142012a","type":"SquareX"},{"attributes":{},"id":"b6c5d58f-beaa-41e8-9e8a-c8ff1c31281f","type":"LinearScale"},{"attributes":{},"id":"b8fe38e6-b58f-45a2-b4f7-a7a0b69f9105","type":"SaveTool"},{"attributes":{"plot":{"id":"b57cd7bd-0173-4b4d-995a-eee845253393","subtype":"Figure","type":"Plot"},"ticker":{"id":"af4b8eea-31cf-476b-a9c8-33e4803ef4f2","type":"BasicTicker"}},"id":"c66378b4-594e-4e91-984c-6eed67f0ae85","type":"Grid"},{"attributes":{},"id":"af4b8eea-31cf-476b-a9c8-33e4803ef4f2","type":"BasicTicker"},{"attributes":{"formatter":{"id":"39a35490-4b73-4b1d-8dbd-7de60fa0c9f7","type":"BasicTickFormatter"},"plot":{"id":"b57cd7bd-0173-4b4d-995a-eee845253393","subtype":"Figure","type":"Plot"},"ticker":{"id":"2e070ad2-a25f-49a1-9a7e-c07227ee4b22","type":"BasicTicker"}},"id":"a3c82319-f32c-4a2f-8e8d-5aa39d350ac2","type":"LinearAxis"},{"attributes":{"source":{"id":"f3151eb3-1dbf-46f8-9530-2201c7a99c72","type":"ColumnDataSource"}},"id":"0d003f49-9ea5-4420-bfba-4b86a48ebf82","type":"CDSView"},{"attributes":{},"id":"2e070ad2-a25f-49a1-9a7e-c07227ee4b22","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"b57cd7bd-0173-4b4d-995a-eee845253393","subtype":"Figure","type":"Plot"},"ticker":{"id":"2e070ad2-a25f-49a1-9a7e-c07227ee4b22","type":"BasicTicker"}},"id":"50f83fc1-a07c-4a84-aaed-0884b8a584d2","type":"Grid"},{"attributes":{"data_source":{"id":"f3151eb3-1dbf-46f8-9530-2201c7a99c72","type":"ColumnDataSource"},"glyph":{"id":"f387e9d0-a011-4679-a9c6-b1f2a7dd6a17","type":"SquareX"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f39ca67d-fee6-4535-a2f3-09917142012a","type":"SquareX"},"selection_glyph":null,"view":{"id":"0d003f49-9ea5-4420-bfba-4b86a48ebf82","type":"CDSView"}},"id":"053a8242-cef3-48da-96d3-0d3bd4ffda0f","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y","size"],"data":{"size":[10,20,25],"x":[1,2,3],"y":[1,2,3]}},"id":"f3151eb3-1dbf-46f8-9530-2201c7a99c72","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":""},"id":"6eea8b12-4c72-4d05-b9bd-b1026292e0be","type":"Title"},{"attributes":{"below":[{"id":"3f5e9e03-3e7b-4d45-9030-00aa17d4ad6b","type":"LinearAxis"}],"left":[{"id":"a3c82319-f32c-4a2f-8e8d-5aa39d350ac2","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"3f5e9e03-3e7b-4d45-9030-00aa17d4ad6b","type":"LinearAxis"},{"id":"c66378b4-594e-4e91-984c-6eed67f0ae85","type":"Grid"},{"id":"a3c82319-f32c-4a2f-8e8d-5aa39d350ac2","type":"LinearAxis"},{"id":"50f83fc1-a07c-4a84-aaed-0884b8a584d2","type":"Grid"},{"id":"880374eb-efa0-4c57-837e-c3d55cbc436f","type":"BoxAnnotation"},{"id":"053a8242-cef3-48da-96d3-0d3bd4ffda0f","type":"GlyphRenderer"}],"title":{"id":"6eea8b12-4c72-4d05-b9bd-b1026292e0be","type":"Title"},"toolbar":{"id":"77db6744-9e59-4ce4-941a-8daf19c5f196","type":"Toolbar"},"x_range":{"id":"3f2099d9-a259-45b0-9165-8ca021239aad","type":"DataRange1d"},"x_scale":{"id":"0834b3b6-6a96-4bb9-8f15-0ea57b62363a","type":"LinearScale"},"y_range":{"id":"74b901c6-6f5a-4c49-a15d-8e1972af360b","type":"DataRange1d"},"y_scale":{"id":"b6c5d58f-beaa-41e8-9e8a-c8ff1c31281f","type":"LinearScale"}},"id":"b57cd7bd-0173-4b4d-995a-eee845253393","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"39a35490-4b73-4b1d-8dbd-7de60fa0c9f7","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f52a8607-95cc-4994-a4a8-d0615a88b213","type":"PanTool"},{"id":"d7543ae5-ffa6-4da7-b07b-aebc66605a41","type":"WheelZoomTool"},{"id":"59f7a1d1-459c-45e8-b214-9f1c6cb40199","type":"BoxZoomTool"},{"id":"b8fe38e6-b58f-45a2-b4f7-a7a0b69f9105","type":"SaveTool"},{"id":"33e24a44-d8ad-4e2d-9599-957d28cc5ca3","type":"ResetTool"},{"id":"520c7839-85f1-4e68-bbe3-fe8de3ce3d77","type":"HelpTool"}]},"id":"77db6744-9e59-4ce4-941a-8daf19c5f196","type":"Toolbar"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#FDAE6B"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"f387e9d0-a011-4679-a9c6-b1f2a7dd6a17","type":"SquareX"},{"attributes":{},"id":"f52a8607-95cc-4994-a4a8-d0615a88b213","type":"PanTool"},{"attributes":{"callback":null},"id":"3f2099d9-a259-45b0-9165-8ca021239aad","type":"DataRange1d"}],"root_ids":["b57cd7bd-0173-4b4d-995a-eee845253393"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"5147c3cf-5aa6-4288-bed1-26cec422f37c","elementid":"fb99e665-7ed8-42c5-b3a8-6ea035568d12","modelid":"b57cd7bd-0173-4b4d-995a-eee845253393"}];
                
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
