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
      };var element = document.getElementById("5f6d46fd-a1df-472e-87ff-4ae5f6541e5d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '5f6d46fd-a1df-472e-87ff-4ae5f6541e5d' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"425d683b-54b2-4f14-9809-afa6a3454615":{"roots":{"references":[{"attributes":{},"id":"49c3146d-8f55-4544-8a39-45e39d18f0e2","type":"SaveTool"},{"attributes":{},"id":"490bcc0c-34c2-447c-b970-cb400a74c664","type":"BasicTicker"},{"attributes":{},"id":"ca639bae-00f4-4162-ae5e-1c45b26370e3","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"0374343f-c6fe-4268-be14-7d00980637ee","subtype":"Figure","type":"Plot"},"ticker":{"id":"490bcc0c-34c2-447c-b970-cb400a74c664","type":"BasicTicker"}},"id":"20c6eebf-6e93-422d-b657-d3bf814fcaaa","type":"Grid"},{"attributes":{"callback":null},"id":"bb0b6d4b-0a1e-44d7-80a9-d8148d3b74ab","type":"DataRange1d"},{"attributes":{},"id":"a10cc94d-1177-4b0a-ab08-49a17893d7aa","type":"HelpTool"},{"attributes":{"plot":null,"text":""},"id":"ede69917-ac55-4f5c-8c25-ce6bdc30a01f","type":"Title"},{"attributes":{},"id":"2ee6efff-3c0b-4a74-9aaf-a8d7e83aebdb","type":"BasicTicker"},{"attributes":{"formatter":{"id":"ca639bae-00f4-4162-ae5e-1c45b26370e3","type":"BasicTickFormatter"},"plot":{"id":"0374343f-c6fe-4268-be14-7d00980637ee","subtype":"Figure","type":"Plot"},"ticker":{"id":"490bcc0c-34c2-447c-b970-cb400a74c664","type":"BasicTicker"}},"id":"a9c91a96-b14d-4f74-9bac-53d5aaa186f7","type":"LinearAxis"},{"attributes":{},"id":"d54d224b-9dd4-4b38-b0b0-928ef7da752f","type":"PanTool"},{"attributes":{"overlay":{"id":"9dcd8f70-dd59-4908-84cf-f8739b1603dc","type":"BoxAnnotation"}},"id":"5ca17bd6-79e5-4142-8935-32b5d4e4dca1","type":"BoxZoomTool"},{"attributes":{},"id":"08720795-baf6-454d-9643-81c8a3644b0b","type":"LinearScale"},{"attributes":{"plot":{"id":"0374343f-c6fe-4268-be14-7d00980637ee","subtype":"Figure","type":"Plot"},"ticker":{"id":"2ee6efff-3c0b-4a74-9aaf-a8d7e83aebdb","type":"BasicTicker"}},"id":"b4558fcc-2af6-48e9-b8b3-79773fc7c60e","type":"Grid"},{"attributes":{"callback":null},"id":"de7bd80c-f2d4-45ec-8bbd-42b37bcaffc6","type":"DataRange1d"},{"attributes":{},"id":"812bcf62-5634-4f90-aed8-923f94a63b72","type":"Selection"},{"attributes":{},"id":"3a75edb7-0f9a-4bff-88cb-899654e0498d","type":"UnionRenderers"},{"attributes":{"angle":{"field":"angle","units":"deg"},"length":{"units":"data","value":45},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"98a4d133-daa3-46c8-822b-13a75867a13d","type":"Ray"},{"attributes":{"data_source":{"id":"7f8309e6-46ed-4d67-9c88-be2ba61d316d","type":"ColumnDataSource"},"glyph":{"id":"49321e7d-e627-4d99-b7eb-5a62bb3eed89","type":"Ray"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"98a4d133-daa3-46c8-822b-13a75867a13d","type":"Ray"},"selection_glyph":null,"view":{"id":"4aed2c07-503c-4247-b97f-ca2725a20873","type":"CDSView"}},"id":"688b2c6d-5008-47a4-b971-75ca4a3ef7a0","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"42766f00-d37e-45ff-b116-fcaa43364e36","type":"LinearAxis"}],"left":[{"id":"a9c91a96-b14d-4f74-9bac-53d5aaa186f7","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"42766f00-d37e-45ff-b116-fcaa43364e36","type":"LinearAxis"},{"id":"b4558fcc-2af6-48e9-b8b3-79773fc7c60e","type":"Grid"},{"id":"a9c91a96-b14d-4f74-9bac-53d5aaa186f7","type":"LinearAxis"},{"id":"20c6eebf-6e93-422d-b657-d3bf814fcaaa","type":"Grid"},{"id":"9dcd8f70-dd59-4908-84cf-f8739b1603dc","type":"BoxAnnotation"},{"id":"688b2c6d-5008-47a4-b971-75ca4a3ef7a0","type":"GlyphRenderer"}],"title":{"id":"ede69917-ac55-4f5c-8c25-ce6bdc30a01f","type":"Title"},"toolbar":{"id":"c4f2cbaf-dc68-4424-9702-57e4d6e793ea","type":"Toolbar"},"x_range":{"id":"bb0b6d4b-0a1e-44d7-80a9-d8148d3b74ab","type":"DataRange1d"},"x_scale":{"id":"08720795-baf6-454d-9643-81c8a3644b0b","type":"LinearScale"},"y_range":{"id":"de7bd80c-f2d4-45ec-8bbd-42b37bcaffc6","type":"DataRange1d"},"y_scale":{"id":"52105e15-b425-4db1-945e-299194980798","type":"LinearScale"}},"id":"0374343f-c6fe-4268-be14-7d00980637ee","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9dcd8f70-dd59-4908-84cf-f8739b1603dc","type":"BoxAnnotation"},{"attributes":{"angle":{"field":"angle","units":"deg"},"length":{"units":"data","value":45},"line_color":{"value":"#FB8072"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"49321e7d-e627-4d99-b7eb-5a62bb3eed89","type":"Ray"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"d54d224b-9dd4-4b38-b0b0-928ef7da752f","type":"PanTool"},{"id":"52dbc086-9470-4686-8572-bafe6d838027","type":"WheelZoomTool"},{"id":"5ca17bd6-79e5-4142-8935-32b5d4e4dca1","type":"BoxZoomTool"},{"id":"49c3146d-8f55-4544-8a39-45e39d18f0e2","type":"SaveTool"},{"id":"b8a99fa8-5b69-454e-94fd-b6de2bfeab4e","type":"ResetTool"},{"id":"a10cc94d-1177-4b0a-ab08-49a17893d7aa","type":"HelpTool"}]},"id":"c4f2cbaf-dc68-4424-9702-57e4d6e793ea","type":"Toolbar"},{"attributes":{"formatter":{"id":"56a7ed17-a1f6-4bb5-9bc9-fad3ee661334","type":"BasicTickFormatter"},"plot":{"id":"0374343f-c6fe-4268-be14-7d00980637ee","subtype":"Figure","type":"Plot"},"ticker":{"id":"2ee6efff-3c0b-4a74-9aaf-a8d7e83aebdb","type":"BasicTicker"}},"id":"42766f00-d37e-45ff-b116-fcaa43364e36","type":"LinearAxis"},{"attributes":{},"id":"56a7ed17-a1f6-4bb5-9bc9-fad3ee661334","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"7f8309e6-46ed-4d67-9c88-be2ba61d316d","type":"ColumnDataSource"}},"id":"4aed2c07-503c-4247-b97f-ca2725a20873","type":"CDSView"},{"attributes":{"callback":null,"data":{"angle":[30,45,60],"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"812bcf62-5634-4f90-aed8-923f94a63b72","type":"Selection"},"selection_policy":{"id":"3a75edb7-0f9a-4bff-88cb-899654e0498d","type":"UnionRenderers"}},"id":"7f8309e6-46ed-4d67-9c88-be2ba61d316d","type":"ColumnDataSource"},{"attributes":{},"id":"b8a99fa8-5b69-454e-94fd-b6de2bfeab4e","type":"ResetTool"},{"attributes":{},"id":"52105e15-b425-4db1-945e-299194980798","type":"LinearScale"},{"attributes":{},"id":"52dbc086-9470-4686-8572-bafe6d838027","type":"WheelZoomTool"}],"root_ids":["0374343f-c6fe-4268-be14-7d00980637ee"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"425d683b-54b2-4f14-9809-afa6a3454615","roots":{"0374343f-c6fe-4268-be14-7d00980637ee":"5f6d46fd-a1df-472e-87ff-4ae5f6541e5d"}}];
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