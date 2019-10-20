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
      };var element = document.getElementById("861f4da6-ed58-4e2a-9d4d-b4f6abc04ae4");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '861f4da6-ed58-4e2a-9d4d-b4f6abc04ae4' but no matching script tag was found. ")
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
                    var docs_json = {"b67de0d8-d178-4cf2-b462-b9adfdcbd9cd":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"cab3fda7-592d-4ca9-b7b7-2b3bf4cf4db0","subtype":"Figure","type":"Plot"},"ticker":{"id":"5775e223-eadb-4d6b-84c0-bc39dd135f7c","type":"BasicTicker"}},"id":"56ba42a6-4a9b-4503-b228-edfe7bd4a894","type":"Grid"},{"attributes":{},"id":"d942d135-a16a-42dc-969a-2d5dabf55fb9","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"8eac39cb-8ef7-4f17-97d2-1ec616c238f7","type":"ColumnDataSource"},"glyph":{"id":"6fb9efdd-46bc-4637-8caf-8dffd4dc7e66","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"03f5eb6f-25e2-4e0d-b3a3-b72d7a6e14a4","type":"Line"},"selection_glyph":null,"view":{"id":"b1e77833-7156-4206-a199-67655a223edb","type":"CDSView"}},"id":"094e6ba8-ff93-4167-be5d-6a477c88278a","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"5a90a8f2-8840-43a0-b8c9-39cead048916","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"7d305fd2-11f2-4f51-9489-fe39708cd437","type":"Circle"},{"attributes":{"data_source":{"id":"7b3103ba-9236-44ca-9563-73f8e39b3f30","type":"ColumnDataSource"},"glyph":{"id":"5a90a8f2-8840-43a0-b8c9-39cead048916","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7d305fd2-11f2-4f51-9489-fe39708cd437","type":"Circle"},"selection_glyph":null,"view":{"id":"2ddab521-94dc-413e-80c6-af5af57f5b95","type":"CDSView"}},"id":"bb0778e4-2f99-459d-a9d3-921fd1ad018c","type":"GlyphRenderer"},{"attributes":{},"id":"18a7c98c-737b-4e25-a406-f5ee23927f4b","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"96cac85a-dacd-4cc5-b29b-5276c3e36228","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,6,4,5]}},"id":"7b3103ba-9236-44ca-9563-73f8e39b3f30","type":"ColumnDataSource"},{"attributes":{},"id":"fca0a989-ed17-4889-a111-077afa683a97","type":"PanTool"},{"attributes":{},"id":"e9179886-9807-4ab5-a98e-0eb972dca83f","type":"WheelZoomTool"},{"attributes":{"source":{"id":"7b3103ba-9236-44ca-9563-73f8e39b3f30","type":"ColumnDataSource"}},"id":"2ddab521-94dc-413e-80c6-af5af57f5b95","type":"CDSView"},{"attributes":{"overlay":{"id":"96cac85a-dacd-4cc5-b29b-5276c3e36228","type":"BoxAnnotation"}},"id":"c53b6c42-f2a3-43c3-8a1b-34fa694d548f","type":"BoxZoomTool"},{"attributes":{},"id":"b40192d2-9c85-4b54-b454-b204ea634c61","type":"SaveTool"},{"attributes":{},"id":"8ec77c70-d7dd-499c-aa2b-8a250aa6f6ad","type":"HelpTool"},{"attributes":{"callback":null},"id":"2e251017-2ec0-426d-9d3d-5757cb77af6a","type":"DataRange1d"},{"attributes":{},"id":"01e6999f-87c0-4a35-8f69-872cb4c7b355","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"8eac39cb-8ef7-4f17-97d2-1ec616c238f7","type":"ColumnDataSource"}},"id":"b1e77833-7156-4206-a199-67655a223edb","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,6,4,5]}},"id":"8eac39cb-8ef7-4f17-97d2-1ec616c238f7","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"f158e6fe-2325-4b9f-990c-fd80df1b3270","type":"LinearAxis"}],"left":[{"id":"5f5490b8-b777-4680-a367-04462a9efa04","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"f158e6fe-2325-4b9f-990c-fd80df1b3270","type":"LinearAxis"},{"id":"20b808d0-3e55-4cf7-ac6a-0f493b36802b","type":"Grid"},{"id":"5f5490b8-b777-4680-a367-04462a9efa04","type":"LinearAxis"},{"id":"56ba42a6-4a9b-4503-b228-edfe7bd4a894","type":"Grid"},{"id":"96cac85a-dacd-4cc5-b29b-5276c3e36228","type":"BoxAnnotation"},{"id":"094e6ba8-ff93-4167-be5d-6a477c88278a","type":"GlyphRenderer"},{"id":"bb0778e4-2f99-459d-a9d3-921fd1ad018c","type":"GlyphRenderer"}],"title":{"id":"ca82c00e-1aaf-41f0-bd1c-ed543f1e1c9d","type":"Title"},"toolbar":{"id":"09c7ebe7-c6c1-4233-b69d-47a1179a7f0a","type":"Toolbar"},"x_range":{"id":"2e251017-2ec0-426d-9d3d-5757cb77af6a","type":"DataRange1d"},"x_scale":{"id":"9d9c3044-04d2-497c-8294-cd8b6d86c840","type":"LinearScale"},"y_range":{"id":"369b0b7e-a89c-41ce-b39b-f38f7c72a33e","type":"DataRange1d"},"y_scale":{"id":"3c3a38b9-7d9e-4c89-9800-4d7a55d79b63","type":"LinearScale"}},"id":"cab3fda7-592d-4ca9-b7b7-2b3bf4cf4db0","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":"example"},"id":"ca82c00e-1aaf-41f0-bd1c-ed543f1e1c9d","type":"Title"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"03f5eb6f-25e2-4e0d-b3a3-b72d7a6e14a4","type":"Line"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"fca0a989-ed17-4889-a111-077afa683a97","type":"PanTool"},{"id":"e9179886-9807-4ab5-a98e-0eb972dca83f","type":"WheelZoomTool"},{"id":"c53b6c42-f2a3-43c3-8a1b-34fa694d548f","type":"BoxZoomTool"},{"id":"b40192d2-9c85-4b54-b454-b204ea634c61","type":"SaveTool"},{"id":"18a7c98c-737b-4e25-a406-f5ee23927f4b","type":"ResetTool"},{"id":"8ec77c70-d7dd-499c-aa2b-8a250aa6f6ad","type":"HelpTool"}]},"id":"09c7ebe7-c6c1-4233-b69d-47a1179a7f0a","type":"Toolbar"},{"attributes":{"callback":null},"id":"369b0b7e-a89c-41ce-b39b-f38f7c72a33e","type":"DataRange1d"},{"attributes":{},"id":"9d9c3044-04d2-497c-8294-cd8b6d86c840","type":"LinearScale"},{"attributes":{},"id":"3c3a38b9-7d9e-4c89-9800-4d7a55d79b63","type":"LinearScale"},{"attributes":{"plot":{"id":"cab3fda7-592d-4ca9-b7b7-2b3bf4cf4db0","subtype":"Figure","type":"Plot"},"ticker":{"id":"a9595d1c-58b2-4c39-bba0-9928cc55e8f4","type":"BasicTicker"}},"id":"20b808d0-3e55-4cf7-ac6a-0f493b36802b","type":"Grid"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"6fb9efdd-46bc-4637-8caf-8dffd4dc7e66","type":"Line"},{"attributes":{"formatter":{"id":"d942d135-a16a-42dc-969a-2d5dabf55fb9","type":"BasicTickFormatter"},"plot":{"id":"cab3fda7-592d-4ca9-b7b7-2b3bf4cf4db0","subtype":"Figure","type":"Plot"},"ticker":{"id":"a9595d1c-58b2-4c39-bba0-9928cc55e8f4","type":"BasicTicker"}},"id":"f158e6fe-2325-4b9f-990c-fd80df1b3270","type":"LinearAxis"},{"attributes":{},"id":"a9595d1c-58b2-4c39-bba0-9928cc55e8f4","type":"BasicTicker"},{"attributes":{"formatter":{"id":"01e6999f-87c0-4a35-8f69-872cb4c7b355","type":"BasicTickFormatter"},"plot":{"id":"cab3fda7-592d-4ca9-b7b7-2b3bf4cf4db0","subtype":"Figure","type":"Plot"},"ticker":{"id":"5775e223-eadb-4d6b-84c0-bc39dd135f7c","type":"BasicTicker"}},"id":"5f5490b8-b777-4680-a367-04462a9efa04","type":"LinearAxis"},{"attributes":{},"id":"5775e223-eadb-4d6b-84c0-bc39dd135f7c","type":"BasicTicker"}],"root_ids":["cab3fda7-592d-4ca9-b7b7-2b3bf4cf4db0"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"b67de0d8-d178-4cf2-b462-b9adfdcbd9cd","elementid":"861f4da6-ed58-4e2a-9d4d-b4f6abc04ae4","modelid":"cab3fda7-592d-4ca9-b7b7-2b3bf4cf4db0"}];
                
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
