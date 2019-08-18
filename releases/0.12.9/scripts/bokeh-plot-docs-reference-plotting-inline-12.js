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
      };var element = document.getElementById("09f5bae4-5b17-4c16-983d-1caaa884811e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '09f5bae4-5b17-4c16-983d-1caaa884811e' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.9.min.js"];
    
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
                    var docs_json = {"af2a50df-2267-4f62-9abc-a8d8f14cad24":{"roots":{"references":[{"attributes":{"source":{"id":"5b0004e8-cf62-4ea2-b92c-fbed83d37979","type":"ColumnDataSource"}},"id":"b0fee4db-6689-44fc-bf03-e7b0b511f3ff","type":"CDSView"},{"attributes":{"callback":null},"id":"9d9e0301-5cae-4496-8dd8-41fcdceb77a3","type":"DataRange1d"},{"attributes":{},"id":"c308a433-be8b-41e3-81a3-717789665cc4","type":"WheelZoomTool"},{"attributes":{"line_color":{"field":"line_color"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"14d438db-8a84-4211-ae86-36d48c50052c","type":"MultiLine"},{"attributes":{"overlay":{"id":"8da0b66d-3b31-4b21-a10c-270ff7ca8b13","type":"BoxAnnotation"}},"id":"576ceeab-8c95-4a93-967d-712ab9bcae1d","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"6b1ed461-37f6-4bcd-bc34-31c0074854a9","type":"DataRange1d"},{"attributes":{},"id":"2b435972-8382-4415-bc33-d3f22257563f","type":"SaveTool"},{"attributes":{},"id":"05432243-024d-4da3-b3ad-3a344724b108","type":"BasicTicker"},{"attributes":{},"id":"d44d83e2-c238-45fa-85b4-dd039bbdee4d","type":"ResetTool"},{"attributes":{},"id":"3118ac9e-ce8a-413e-8e42-3fc812896498","type":"LinearScale"},{"attributes":{},"id":"dcff0cfd-be2f-4a40-b3c8-990b98502cac","type":"HelpTool"},{"attributes":{"formatter":{"id":"176f4e88-312d-4c16-a46a-f0093017be93","type":"BasicTickFormatter"},"plot":{"id":"833967c2-1366-4a16-9825-ffd4bdc3462c","subtype":"Figure","type":"Plot"},"ticker":{"id":"05432243-024d-4da3-b3ad-3a344724b108","type":"BasicTicker"}},"id":"caf9e90f-0cce-4c45-b32d-68f8d3076b19","type":"LinearAxis"},{"attributes":{},"id":"0815e7fa-1d2f-4764-ae4b-e9fe775763db","type":"LinearScale"},{"attributes":{"plot":{"id":"833967c2-1366-4a16-9825-ffd4bdc3462c","subtype":"Figure","type":"Plot"},"ticker":{"id":"11e37fd0-dd3b-44c0-8a5c-122c45bdb1cf","type":"BasicTicker"}},"id":"36806f3c-75b8-4725-bb77-cae30f146aab","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"329e9255-26d2-470d-90d0-2d585e5f5c2c","type":"Title"},{"attributes":{"formatter":{"id":"f4c9c884-ff91-4f9b-b62c-083f56ae884c","type":"BasicTickFormatter"},"plot":{"id":"833967c2-1366-4a16-9825-ffd4bdc3462c","subtype":"Figure","type":"Plot"},"ticker":{"id":"11e37fd0-dd3b-44c0-8a5c-122c45bdb1cf","type":"BasicTicker"}},"id":"725d622e-15d1-4df5-97ab-43bec7511e34","type":"LinearAxis"},{"attributes":{},"id":"176f4e88-312d-4c16-a46a-f0093017be93","type":"BasicTickFormatter"},{"attributes":{},"id":"11e37fd0-dd3b-44c0-8a5c-122c45bdb1cf","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"833967c2-1366-4a16-9825-ffd4bdc3462c","subtype":"Figure","type":"Plot"},"ticker":{"id":"05432243-024d-4da3-b3ad-3a344724b108","type":"BasicTicker"}},"id":"919b8859-3ee9-40f0-a390-6e4d7b7c6578","type":"Grid"},{"attributes":{"data_source":{"id":"5b0004e8-cf62-4ea2-b92c-fbed83d37979","type":"ColumnDataSource"},"glyph":{"id":"14d438db-8a84-4211-ae86-36d48c50052c","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2d147f54-9e21-46d0-8787-46670ef3e9eb","type":"MultiLine"},"selection_glyph":null,"view":{"id":"b0fee4db-6689-44fc-bf03-e7b0b511f3ff","type":"CDSView"}},"id":"cb9e6063-40f9-4c60-b8d6-f69c605c7153","type":"GlyphRenderer"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"2d147f54-9e21-46d0-8787-46670ef3e9eb","type":"MultiLine"},{"attributes":{},"id":"f4c9c884-ff91-4f9b-b62c-083f56ae884c","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["xs","ys","line_color"],"data":{"line_color":["red","green"],"xs":[[1,2,3],[2,3,4]],"ys":[[6,7,2],[4,5,7]]}},"id":"5b0004e8-cf62-4ea2-b92c-fbed83d37979","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"725d622e-15d1-4df5-97ab-43bec7511e34","type":"LinearAxis"}],"left":[{"id":"caf9e90f-0cce-4c45-b32d-68f8d3076b19","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"725d622e-15d1-4df5-97ab-43bec7511e34","type":"LinearAxis"},{"id":"36806f3c-75b8-4725-bb77-cae30f146aab","type":"Grid"},{"id":"caf9e90f-0cce-4c45-b32d-68f8d3076b19","type":"LinearAxis"},{"id":"919b8859-3ee9-40f0-a390-6e4d7b7c6578","type":"Grid"},{"id":"8da0b66d-3b31-4b21-a10c-270ff7ca8b13","type":"BoxAnnotation"},{"id":"cb9e6063-40f9-4c60-b8d6-f69c605c7153","type":"GlyphRenderer"}],"title":{"id":"329e9255-26d2-470d-90d0-2d585e5f5c2c","type":"Title"},"toolbar":{"id":"1805b65b-5af8-4ccb-9a73-04bfdc714073","type":"Toolbar"},"x_range":{"id":"9d9e0301-5cae-4496-8dd8-41fcdceb77a3","type":"DataRange1d"},"x_scale":{"id":"3118ac9e-ce8a-413e-8e42-3fc812896498","type":"LinearScale"},"y_range":{"id":"6b1ed461-37f6-4bcd-bc34-31c0074854a9","type":"DataRange1d"},"y_scale":{"id":"0815e7fa-1d2f-4764-ae4b-e9fe775763db","type":"LinearScale"}},"id":"833967c2-1366-4a16-9825-ffd4bdc3462c","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8da0b66d-3b31-4b21-a10c-270ff7ca8b13","type":"BoxAnnotation"},{"attributes":{},"id":"f8132e1a-92bf-46f0-9d5e-d2264656a3f8","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f8132e1a-92bf-46f0-9d5e-d2264656a3f8","type":"PanTool"},{"id":"c308a433-be8b-41e3-81a3-717789665cc4","type":"WheelZoomTool"},{"id":"576ceeab-8c95-4a93-967d-712ab9bcae1d","type":"BoxZoomTool"},{"id":"2b435972-8382-4415-bc33-d3f22257563f","type":"SaveTool"},{"id":"d44d83e2-c238-45fa-85b4-dd039bbdee4d","type":"ResetTool"},{"id":"dcff0cfd-be2f-4a40-b3c8-990b98502cac","type":"HelpTool"}]},"id":"1805b65b-5af8-4ccb-9a73-04bfdc714073","type":"Toolbar"}],"root_ids":["833967c2-1366-4a16-9825-ffd4bdc3462c"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"af2a50df-2267-4f62-9abc-a8d8f14cad24","elementid":"09f5bae4-5b17-4c16-983d-1caaa884811e","modelid":"833967c2-1366-4a16-9825-ffd4bdc3462c"}];
                
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
                        console.log("Bokeh: ERROR: Unable to embed document because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
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
