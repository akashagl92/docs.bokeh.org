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
      };var element = document.getElementById("e1e7cdea-e778-49e2-b2e2-7ed2d46de4f4");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e1e7cdea-e778-49e2-b2e2-7ed2d46de4f4' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.10.min.js"];
    
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
                    var docs_json = {"4e2bc719-9ce0-46ce-aecf-7959ff50b1be":{"roots":{"references":[{"attributes":{},"id":"2233b43d-9e29-4278-a8bf-ef004f640ea5","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"7566b18c-ea10-48f3-b2ff-67e75a101a06","type":"Patch"},{"attributes":{"plot":{"id":"c338aedb-a907-4b50-ac16-5c2cb11340df","subtype":"Figure","type":"Plot"},"ticker":{"id":"aff37688-db8d-4408-a6de-e2e5c13e6a4c","type":"BasicTicker"}},"id":"76f23169-2d52-4198-b954-9b7d1d411f80","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"c338aedb-a907-4b50-ac16-5c2cb11340df","subtype":"Figure","type":"Plot"},"ticker":{"id":"675508a1-8d30-499f-96bf-f25eb3b1047a","type":"BasicTicker"}},"id":"a82c2259-f7e3-4c26-8ed2-25f57b109b83","type":"Grid"},{"attributes":{},"id":"0e0c681d-e54b-4840-9042-4a5dd5095fb7","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"0e0c681d-e54b-4840-9042-4a5dd5095fb7","type":"BasicTickFormatter"},"plot":{"id":"c338aedb-a907-4b50-ac16-5c2cb11340df","subtype":"Figure","type":"Plot"},"ticker":{"id":"aff37688-db8d-4408-a6de-e2e5c13e6a4c","type":"BasicTicker"}},"id":"9de58c6f-11a4-4373-9141-fdb0cf441866","type":"LinearAxis"},{"attributes":{},"id":"aff37688-db8d-4408-a6de-e2e5c13e6a4c","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"cb21990c-4e19-4850-8969-879eb0b60ba3","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"c75a1455-0a50-45bc-9d04-2c5dbc92f4a8","type":"BasicTickFormatter"},"plot":{"id":"c338aedb-a907-4b50-ac16-5c2cb11340df","subtype":"Figure","type":"Plot"},"ticker":{"id":"675508a1-8d30-499f-96bf-f25eb3b1047a","type":"BasicTicker"}},"id":"6183708c-bbfe-40a5-9da4-fb1fa4b84967","type":"LinearAxis"},{"attributes":{},"id":"307183a9-7f93-4a62-a2d5-767583937405","type":"PanTool"},{"attributes":{},"id":"675508a1-8d30-499f-96bf-f25eb3b1047a","type":"BasicTicker"},{"attributes":{"source":{"id":"3527d964-2f5b-4325-8609-d079bf2896e2","type":"ColumnDataSource"}},"id":"a840e35a-d8f3-40ba-9915-da969bd84769","type":"CDSView"},{"attributes":{},"id":"c4caba87-2c9b-4f5e-a7eb-4e6ea0540232","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,8,7,3]}},"id":"3527d964-2f5b-4325-8609-d079bf2896e2","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"3527d964-2f5b-4325-8609-d079bf2896e2","type":"ColumnDataSource"},"glyph":{"id":"fdaa4917-ee6c-4e02-a8df-792d0c22f191","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7566b18c-ea10-48f3-b2ff-67e75a101a06","type":"Patch"},"selection_glyph":null,"view":{"id":"a840e35a-d8f3-40ba-9915-da969bd84769","type":"CDSView"}},"id":"e984ae4e-b87b-46ad-b1cc-ef40b4081a41","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"cb21990c-4e19-4850-8969-879eb0b60ba3","type":"BoxAnnotation"}},"id":"ffdadcae-425f-4772-930c-c9a996041075","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"9de58c6f-11a4-4373-9141-fdb0cf441866","type":"LinearAxis"}],"left":[{"id":"6183708c-bbfe-40a5-9da4-fb1fa4b84967","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"9de58c6f-11a4-4373-9141-fdb0cf441866","type":"LinearAxis"},{"id":"76f23169-2d52-4198-b954-9b7d1d411f80","type":"Grid"},{"id":"6183708c-bbfe-40a5-9da4-fb1fa4b84967","type":"LinearAxis"},{"id":"a82c2259-f7e3-4c26-8ed2-25f57b109b83","type":"Grid"},{"id":"cb21990c-4e19-4850-8969-879eb0b60ba3","type":"BoxAnnotation"},{"id":"e984ae4e-b87b-46ad-b1cc-ef40b4081a41","type":"GlyphRenderer"}],"title":{"id":"8bb22675-883e-46e9-a3d4-8eac2c264c83","type":"Title"},"toolbar":{"id":"6da76e0c-9a7b-49f5-9ad6-9307e1e9a8b9","type":"Toolbar"},"x_range":{"id":"776728ed-2a24-4508-a3ed-7df27e4aa921","type":"DataRange1d"},"x_scale":{"id":"c4f90619-bc10-4fa6-ad59-f2772bbf1e03","type":"LinearScale"},"y_range":{"id":"59d9a198-5441-4f7d-9124-c52c58eea32f","type":"DataRange1d"},"y_scale":{"id":"2233b43d-9e29-4278-a8bf-ef004f640ea5","type":"LinearScale"}},"id":"c338aedb-a907-4b50-ac16-5c2cb11340df","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"5f4ee9ac-af5e-4ca3-88ce-29a5ae71b87d","type":"SaveTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"307183a9-7f93-4a62-a2d5-767583937405","type":"PanTool"},{"id":"c4caba87-2c9b-4f5e-a7eb-4e6ea0540232","type":"WheelZoomTool"},{"id":"ffdadcae-425f-4772-930c-c9a996041075","type":"BoxZoomTool"},{"id":"5f4ee9ac-af5e-4ca3-88ce-29a5ae71b87d","type":"SaveTool"},{"id":"ecc102b8-c688-4437-880b-31ec2806fb6d","type":"ResetTool"},{"id":"bd197ec1-6ce7-4357-9d18-0494068ed27c","type":"HelpTool"}]},"id":"6da76e0c-9a7b-49f5-9ad6-9307e1e9a8b9","type":"Toolbar"},{"attributes":{},"id":"ecc102b8-c688-4437-880b-31ec2806fb6d","type":"ResetTool"},{"attributes":{"callback":null},"id":"776728ed-2a24-4508-a3ed-7df27e4aa921","type":"DataRange1d"},{"attributes":{},"id":"bd197ec1-6ce7-4357-9d18-0494068ed27c","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"fdaa4917-ee6c-4e02-a8df-792d0c22f191","type":"Patch"},{"attributes":{},"id":"c75a1455-0a50-45bc-9d04-2c5dbc92f4a8","type":"BasicTickFormatter"},{"attributes":{},"id":"c4f90619-bc10-4fa6-ad59-f2772bbf1e03","type":"LinearScale"},{"attributes":{"callback":null},"id":"59d9a198-5441-4f7d-9124-c52c58eea32f","type":"DataRange1d"},{"attributes":{"plot":null,"text":""},"id":"8bb22675-883e-46e9-a3d4-8eac2c264c83","type":"Title"}],"root_ids":["c338aedb-a907-4b50-ac16-5c2cb11340df"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"4e2bc719-9ce0-46ce-aecf-7959ff50b1be","elementid":"e1e7cdea-e778-49e2-b2e2-7ed2d46de4f4","modelid":"c338aedb-a907-4b50-ac16-5c2cb11340df"}];
                
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
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
