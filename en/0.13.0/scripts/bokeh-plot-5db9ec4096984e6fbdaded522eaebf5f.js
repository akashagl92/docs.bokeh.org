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
      };var element = document.getElementById("a7e9db14-90af-4887-ba38-0fa01a40569a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a7e9db14-90af-4887-ba38-0fa01a40569a' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"9034811c-efae-4ac3-b79c-c7ce38d36670":{"roots":{"references":[{"attributes":{"formatter":{"id":"e9f9168c-68e7-42a6-b3c3-9dc6165d6a67","type":"BasicTickFormatter"},"plot":{"id":"5cca58d7-ffe3-4134-8f18-3ce70d1a5ce2","subtype":"Figure","type":"Plot"},"ticker":{"id":"a1f1fb32-5c02-4272-a59c-d43e8e6fe952","type":"BasicTicker"}},"id":"8b5fac73-1b28-42d5-8674-c34edd3533c4","type":"LinearAxis"},{"attributes":{"data_source":{"id":"893286b0-78d9-4c17-936b-8228e7e71e02","type":"ColumnDataSource"},"glyph":{"id":"68b997cf-ae87-4ca4-9284-f8896782d3f4","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"77628b0d-0758-4687-8cd8-edf076c06011","type":"Circle"},"selection_glyph":null,"view":{"id":"a4518fad-cf00-46ca-ab03-b2abc7447043","type":"CDSView"}},"id":"d33e91db-3aa2-49d6-861c-c8de215fb1c0","type":"GlyphRenderer"},{"attributes":{},"id":"1f560f03-fec3-407a-956c-8d818e25475e","type":"BasicTicker"},{"attributes":{"formatter":{"id":"825ce270-4c04-4ce9-9a3f-475af4ea6b0d","type":"BasicTickFormatter"},"plot":{"id":"5cca58d7-ffe3-4134-8f18-3ce70d1a5ce2","subtype":"Figure","type":"Plot"},"ticker":{"id":"1f560f03-fec3-407a-956c-8d818e25475e","type":"BasicTicker"}},"id":"5c3250f5-4545-4d92-9049-83df2a9e9a11","type":"LinearAxis"},{"attributes":{},"id":"86630e2e-f0a1-4aec-92e0-a9b2d40b16ad","type":"LinearScale"},{"attributes":{},"id":"923fdf88-4c62-4939-ad32-aa0381931ade","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"950eb437-567c-4f14-98f0-4ad16a0eaff5","type":"DataRange1d"},{"attributes":{},"id":"52361cf6-e129-440b-9323-3a1a0f74ad52","type":"HelpTool"},{"attributes":{},"id":"409ccedb-8299-498a-98c1-0172838ec521","type":"SaveTool"},{"attributes":{"bounds":[2,4],"plot":{"id":"5cca58d7-ffe3-4134-8f18-3ce70d1a5ce2","subtype":"Figure","type":"Plot"},"ticker":{"id":"a1f1fb32-5c02-4272-a59c-d43e8e6fe952","type":"BasicTicker"}},"id":"9be45e69-7ef5-4418-9b36-730bf721fe41","type":"Grid"},{"attributes":{},"id":"e9f9168c-68e7-42a6-b3c3-9dc6165d6a67","type":"BasicTickFormatter"},{"attributes":{},"id":"e3d42cfd-0150-4aed-832d-724655c449a6","type":"ResetTool"},{"attributes":{"overlay":{"id":"5a43fbf1-99da-44c6-bcd5-7de23793ada4","type":"BoxAnnotation"}},"id":"a006606c-0274-4711-ba7b-22b121c6a7dc","type":"BoxZoomTool"},{"attributes":{},"id":"825ce270-4c04-4ce9-9a3f-475af4ea6b0d","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"ed1dfc47-bfce-4e3e-8ab5-e9da57e32cbd","type":"PanTool"},{"id":"923fdf88-4c62-4939-ad32-aa0381931ade","type":"WheelZoomTool"},{"id":"a006606c-0274-4711-ba7b-22b121c6a7dc","type":"BoxZoomTool"},{"id":"409ccedb-8299-498a-98c1-0172838ec521","type":"SaveTool"},{"id":"e3d42cfd-0150-4aed-832d-724655c449a6","type":"ResetTool"},{"id":"52361cf6-e129-440b-9323-3a1a0f74ad52","type":"HelpTool"}]},"id":"3960658a-165e-459c-af61-de284f1ada78","type":"Toolbar"},{"attributes":{"source":{"id":"893286b0-78d9-4c17-936b-8228e7e71e02","type":"ColumnDataSource"}},"id":"a4518fad-cf00-46ca-ab03-b2abc7447043","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"77628b0d-0758-4687-8cd8-edf076c06011","type":"Circle"},{"attributes":{},"id":"1b4e316c-4eb2-4e10-9aea-c22f60555606","type":"UnionRenderers"},{"attributes":{},"id":"ed1dfc47-bfce-4e3e-8ab5-e9da57e32cbd","type":"PanTool"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"62cb4a17-84d3-4900-9353-5747c33ff002","type":"Selection"},"selection_policy":{"id":"1b4e316c-4eb2-4e10-9aea-c22f60555606","type":"UnionRenderers"}},"id":"893286b0-78d9-4c17-936b-8228e7e71e02","type":"ColumnDataSource"},{"attributes":{},"id":"62cb4a17-84d3-4900-9353-5747c33ff002","type":"Selection"},{"attributes":{"bounds":[2,4],"dimension":1,"plot":{"id":"5cca58d7-ffe3-4134-8f18-3ce70d1a5ce2","subtype":"Figure","type":"Plot"},"ticker":{"id":"1f560f03-fec3-407a-956c-8d818e25475e","type":"BasicTicker"}},"id":"746454bb-2fa7-429d-b2cd-63dd9b0f13cc","type":"Grid"},{"attributes":{"below":[{"id":"8b5fac73-1b28-42d5-8674-c34edd3533c4","type":"LinearAxis"}],"left":[{"id":"5c3250f5-4545-4d92-9049-83df2a9e9a11","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"8b5fac73-1b28-42d5-8674-c34edd3533c4","type":"LinearAxis"},{"id":"9be45e69-7ef5-4418-9b36-730bf721fe41","type":"Grid"},{"id":"5c3250f5-4545-4d92-9049-83df2a9e9a11","type":"LinearAxis"},{"id":"746454bb-2fa7-429d-b2cd-63dd9b0f13cc","type":"Grid"},{"id":"5a43fbf1-99da-44c6-bcd5-7de23793ada4","type":"BoxAnnotation"},{"id":"d33e91db-3aa2-49d6-861c-c8de215fb1c0","type":"GlyphRenderer"}],"title":{"id":"c9895c25-fab7-4707-8280-fed5ac4d4085","type":"Title"},"toolbar":{"id":"3960658a-165e-459c-af61-de284f1ada78","type":"Toolbar"},"x_range":{"id":"950eb437-567c-4f14-98f0-4ad16a0eaff5","type":"DataRange1d"},"x_scale":{"id":"d795affa-7158-4fe9-91ff-0f898b3374fd","type":"LinearScale"},"y_range":{"id":"6e0227aa-5807-4009-952d-cdc93a1f580e","type":"DataRange1d"},"y_scale":{"id":"86630e2e-f0a1-4aec-92e0-a9b2d40b16ad","type":"LinearScale"}},"id":"5cca58d7-ffe3-4134-8f18-3ce70d1a5ce2","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"6e0227aa-5807-4009-952d-cdc93a1f580e","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"68b997cf-ae87-4ca4-9284-f8896782d3f4","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"5a43fbf1-99da-44c6-bcd5-7de23793ada4","type":"BoxAnnotation"},{"attributes":{},"id":"a1f1fb32-5c02-4272-a59c-d43e8e6fe952","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"c9895c25-fab7-4707-8280-fed5ac4d4085","type":"Title"},{"attributes":{},"id":"d795affa-7158-4fe9-91ff-0f898b3374fd","type":"LinearScale"}],"root_ids":["5cca58d7-ffe3-4134-8f18-3ce70d1a5ce2"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"9034811c-efae-4ac3-b79c-c7ce38d36670","roots":{"5cca58d7-ffe3-4134-8f18-3ce70d1a5ce2":"a7e9db14-90af-4887-ba38-0fa01a40569a"}}];
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