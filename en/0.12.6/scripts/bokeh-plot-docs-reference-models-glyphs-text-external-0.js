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
        try {
          window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete window._bokeh_onload_callbacks
        }
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
      };var element = document.getElementById("9f237bf6-9993-4572-8052-4be6fc98573c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9f237bf6-9993-4572-8052-4be6fc98573c' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.js"];
    
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
                var docs_json = {"66d7d499-16f9-418f-b1f1-6fd608b05e71":{"roots":{"references":[{"attributes":{},"id":"bcb501c6-6343-4ef2-9325-3a66d352fda1","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"8b06d8cc-d93a-47a3-b947-6502dffbe822","type":"Plot"},"ticker":{"id":"b6bb2009-1e15-412f-bc35-c50a2b2f3c46","type":"BasicTicker"}},"id":"917dd140-fe46-4a79-ae8b-9777e19c8ce4","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"78077cc4-867a-4d76-ae63-d9f481a480d1","type":"Toolbar"},{"attributes":{},"id":"cabf31e5-e8b6-4923-8427-aac51c4629de","type":"BasicTickFormatter"},{"attributes":{"angle":{"units":"rad","value":0.3},"text_color":{"value":"#96deb3"},"x":{"field":"x"},"y":{"field":"y"}},"id":"ba05935e-46a6-4adc-8879-5b304984fd52","type":"Text"},{"attributes":{"dimension":1,"plot":{"id":"8b06d8cc-d93a-47a3-b947-6502dffbe822","type":"Plot"},"ticker":{"id":"c12a75e4-20f3-409e-8e36-3d9260471171","type":"BasicTicker"}},"id":"e14eb3ab-dd0c-43ba-9d50-116069d56891","type":"Grid"},{"attributes":{"data_source":{"id":"a42e76b8-8830-4b79-8e10-6a314c44c56d","type":"ColumnDataSource"},"glyph":{"id":"ba05935e-46a6-4adc-8879-5b304984fd52","type":"Text"},"hover_glyph":null,"muted_glyph":null},"id":"c27fa122-37fe-427f-adff-0021261ac7d5","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","text","x"],"data":{"text":["abc","def","ghi","jkl","mno","pqr","stu","vwx","yz"],"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"a42e76b8-8830-4b79-8e10-6a314c44c56d","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"cabf31e5-e8b6-4923-8427-aac51c4629de","type":"BasicTickFormatter"},"plot":{"id":"8b06d8cc-d93a-47a3-b947-6502dffbe822","type":"Plot"},"ticker":{"id":"b6bb2009-1e15-412f-bc35-c50a2b2f3c46","type":"BasicTicker"}},"id":"a10fea5c-ab24-4919-97c6-143112a31f71","type":"LinearAxis"},{"attributes":{},"id":"c4abe64a-f7f9-4638-8040-bf03d4100145","type":"LinearScale"},{"attributes":{"below":[{"id":"a10fea5c-ab24-4919-97c6-143112a31f71","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"eea4fa5c-4eb7-4e12-912f-85da0d1132b9","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"c27fa122-37fe-427f-adff-0021261ac7d5","type":"GlyphRenderer"},{"id":"a10fea5c-ab24-4919-97c6-143112a31f71","type":"LinearAxis"},{"id":"eea4fa5c-4eb7-4e12-912f-85da0d1132b9","type":"LinearAxis"},{"id":"917dd140-fe46-4a79-ae8b-9777e19c8ce4","type":"Grid"},{"id":"e14eb3ab-dd0c-43ba-9d50-116069d56891","type":"Grid"}],"title":null,"tool_events":{"id":"75ff0279-358e-47d5-b1c3-cc145e37948d","type":"ToolEvents"},"toolbar":{"id":"78077cc4-867a-4d76-ae63-d9f481a480d1","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"4d818ed5-0928-4120-84a8-402ecd883e70","type":"DataRange1d"},"x_scale":{"id":"a0fc8ba6-17c0-4004-96ee-46d924b6170e","type":"LinearScale"},"y_range":{"id":"3d4f1a7c-3dd7-48f7-8e6b-97de29fad616","type":"DataRange1d"},"y_scale":{"id":"c4abe64a-f7f9-4638-8040-bf03d4100145","type":"LinearScale"}},"id":"8b06d8cc-d93a-47a3-b947-6502dffbe822","type":"Plot"},{"attributes":{},"id":"c12a75e4-20f3-409e-8e36-3d9260471171","type":"BasicTicker"},{"attributes":{},"id":"75ff0279-358e-47d5-b1c3-cc145e37948d","type":"ToolEvents"},{"attributes":{"callback":null},"id":"3d4f1a7c-3dd7-48f7-8e6b-97de29fad616","type":"DataRange1d"},{"attributes":{"formatter":{"id":"bcb501c6-6343-4ef2-9325-3a66d352fda1","type":"BasicTickFormatter"},"plot":{"id":"8b06d8cc-d93a-47a3-b947-6502dffbe822","type":"Plot"},"ticker":{"id":"c12a75e4-20f3-409e-8e36-3d9260471171","type":"BasicTicker"}},"id":"eea4fa5c-4eb7-4e12-912f-85da0d1132b9","type":"LinearAxis"},{"attributes":{},"id":"a0fc8ba6-17c0-4004-96ee-46d924b6170e","type":"LinearScale"},{"attributes":{},"id":"b6bb2009-1e15-412f-bc35-c50a2b2f3c46","type":"BasicTicker"},{"attributes":{"callback":null},"id":"4d818ed5-0928-4120-84a8-402ecd883e70","type":"DataRange1d"}],"root_ids":["8b06d8cc-d93a-47a3-b947-6502dffbe822"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"66d7d499-16f9-418f-b1f1-6fd608b05e71","elementid":"9f237bf6-9993-4572-8052-4be6fc98573c","modelid":"8b06d8cc-d93a-47a3-b947-6502dffbe822"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
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
