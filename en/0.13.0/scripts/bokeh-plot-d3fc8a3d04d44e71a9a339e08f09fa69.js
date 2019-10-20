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
      };var element = document.getElementById("22496da6-12fb-4cc2-91d8-f7d49e129645");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '22496da6-12fb-4cc2-91d8-f7d49e129645' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"f49e6a46-5ad9-4295-8773-c8b0182328df":{"roots":{"references":[{"attributes":{"source":{"id":"16245e5e-87e1-4bea-bc5c-e3acfd2cb01e","type":"ColumnDataSource"}},"id":"a077ca92-e475-409b-beef-d8426ebb85af","type":"CDSView"},{"attributes":{},"id":"de927b27-ae82-4e2e-8593-8522c2340f4b","type":"UnionRenderers"},{"attributes":{},"id":"615630e5-7017-4781-81ee-1c31f0cf3a8d","type":"HelpTool"},{"attributes":{},"id":"b2717f14-bcf4-4622-9faa-4eb0bbc14275","type":"BasicTickFormatter"},{"attributes":{},"id":"f2add98f-0a59-4302-96d5-4a5065cb7af3","type":"Selection"},{"attributes":{},"id":"5eeb68e5-f084-4c65-8edf-357be88199ec","type":"UnionRenderers"},{"attributes":{"below":[{"id":"ccfa6627-4524-41ca-9853-ab77e88dca8c","type":"LinearAxis"}],"left":[{"id":"41d1e2d0-359e-46c0-a1c6-6b8e489ddcf2","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"ccfa6627-4524-41ca-9853-ab77e88dca8c","type":"LinearAxis"},{"id":"b79a4569-b191-4e4b-8645-a387b260a700","type":"Grid"},{"id":"41d1e2d0-359e-46c0-a1c6-6b8e489ddcf2","type":"LinearAxis"},{"id":"0500080a-291d-4fef-8cc9-454b36e7770c","type":"Grid"},{"id":"03c14aaa-a998-4f70-8a14-8946482f6456","type":"BoxAnnotation"},{"id":"c0737880-c8bf-43ee-89a9-c8ac30be63f4","type":"GlyphRenderer"},{"id":"5e678a90-5d56-447e-aca3-a528d099b637","type":"GlyphRenderer"}],"title":{"id":"a126a585-6c48-4bb5-82b3-349ab43a0d78","type":"Title"},"toolbar":{"id":"9bcb10a1-7668-4051-8ac8-d461a1476a67","type":"Toolbar"},"x_range":{"id":"d7e055e2-355c-49fd-8b23-9e7dd443fe68","type":"DataRange1d"},"x_scale":{"id":"7a96458d-1db8-4915-bcb1-816151cb8abd","type":"LinearScale"},"y_range":{"id":"5ddb6ed2-f2ae-4aa6-bf4d-aa3772e17695","type":"DataRange1d"},"y_scale":{"id":"c4fb8a5d-8902-4f93-9682-6dcbeb2dd1f9","type":"LinearScale"}},"id":"d83df3fa-ff42-4266-9739-04392d5fe5b0","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"7af6e6b2-9101-43aa-beaf-8940c476b52c","type":"PanTool"},{"id":"b2987907-9faf-42e0-914e-242d2a9a315c","type":"WheelZoomTool"},{"id":"d75ee430-0d66-4070-a06d-e7c13c273d98","type":"BoxZoomTool"},{"id":"000ac38c-3ce7-46d5-a76c-c923548eec3e","type":"SaveTool"},{"id":"7976116e-b600-43a2-9120-bca77911013b","type":"ResetTool"},{"id":"615630e5-7017-4781-81ee-1c31f0cf3a8d","type":"HelpTool"}]},"id":"9bcb10a1-7668-4051-8ac8-d461a1476a67","type":"Toolbar"},{"attributes":{},"id":"16224f07-cdf4-44c8-b811-a6e0594cdb2c","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"d7e055e2-355c-49fd-8b23-9e7dd443fe68","type":"DataRange1d"},{"attributes":{},"id":"cf567e27-a2e9-4d7c-b020-76c44bedd239","type":"BasicTicker"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1f3beef8-de1b-4569-baaa-f2bce797cd5f","type":"Line"},{"attributes":{"callback":null},"id":"5ddb6ed2-f2ae-4aa6-bf4d-aa3772e17695","type":"DataRange1d"},{"attributes":{},"id":"7a96458d-1db8-4915-bcb1-816151cb8abd","type":"LinearScale"},{"attributes":{},"id":"c4fb8a5d-8902-4f93-9682-6dcbeb2dd1f9","type":"LinearScale"},{"attributes":{"source":{"id":"bd95d855-fae5-4226-ae13-556742fcfab1","type":"ColumnDataSource"}},"id":"f18a7384-8600-464a-9ecd-7ed7e915e01d","type":"CDSView"},{"attributes":{"plot":{"id":"d83df3fa-ff42-4266-9739-04392d5fe5b0","subtype":"Figure","type":"Plot"},"ticker":{"id":"cf567e27-a2e9-4d7c-b020-76c44bedd239","type":"BasicTicker"}},"id":"b79a4569-b191-4e4b-8645-a387b260a700","type":"Grid"},{"attributes":{},"id":"ba2e1c1c-4844-4208-8463-69f042812b2f","type":"Selection"},{"attributes":{"formatter":{"id":"16224f07-cdf4-44c8-b811-a6e0594cdb2c","type":"BasicTickFormatter"},"plot":{"id":"d83df3fa-ff42-4266-9739-04392d5fe5b0","subtype":"Figure","type":"Plot"},"ticker":{"id":"cf567e27-a2e9-4d7c-b020-76c44bedd239","type":"BasicTicker"}},"id":"ccfa6627-4524-41ca-9853-ab77e88dca8c","type":"LinearAxis"},{"attributes":{"formatter":{"id":"b2717f14-bcf4-4622-9faa-4eb0bbc14275","type":"BasicTickFormatter"},"plot":{"id":"d83df3fa-ff42-4266-9739-04392d5fe5b0","subtype":"Figure","type":"Plot"},"ticker":{"id":"54c8cee4-5c36-466e-97e5-4c483deb1935","type":"BasicTicker"}},"id":"41d1e2d0-359e-46c0-a1c6-6b8e489ddcf2","type":"LinearAxis"},{"attributes":{"data_source":{"id":"16245e5e-87e1-4bea-bc5c-e3acfd2cb01e","type":"ColumnDataSource"},"glyph":{"id":"c1d96b06-33cb-4d2b-931e-b9ec8ea488f8","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7914d478-2323-4f79-8dbf-57bae532ac41","type":"Circle"},"selection_glyph":null,"view":{"id":"a077ca92-e475-409b-beef-d8426ebb85af","type":"CDSView"}},"id":"5e678a90-5d56-447e-aca3-a528d099b637","type":"GlyphRenderer"},{"attributes":{},"id":"7af6e6b2-9101-43aa-beaf-8940c476b52c","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"7914d478-2323-4f79-8dbf-57bae532ac41","type":"Circle"},{"attributes":{},"id":"54c8cee4-5c36-466e-97e5-4c483deb1935","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"d83df3fa-ff42-4266-9739-04392d5fe5b0","subtype":"Figure","type":"Plot"},"ticker":{"id":"54c8cee4-5c36-466e-97e5-4c483deb1935","type":"BasicTicker"}},"id":"0500080a-291d-4fef-8cc9-454b36e7770c","type":"Grid"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"bc40115e-7058-4707-ac16-21a13b5ae08b","type":"Line"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,8,7,3]},"selected":{"id":"f2add98f-0a59-4302-96d5-4a5065cb7af3","type":"Selection"},"selection_policy":{"id":"de927b27-ae82-4e2e-8593-8522c2340f4b","type":"UnionRenderers"}},"id":"16245e5e-87e1-4bea-bc5c-e3acfd2cb01e","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"bd95d855-fae5-4226-ae13-556742fcfab1","type":"ColumnDataSource"},"glyph":{"id":"1f3beef8-de1b-4569-baaa-f2bce797cd5f","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"bc40115e-7058-4707-ac16-21a13b5ae08b","type":"Line"},"selection_glyph":null,"view":{"id":"f18a7384-8600-464a-9ecd-7ed7e915e01d","type":"CDSView"}},"id":"c0737880-c8bf-43ee-89a9-c8ac30be63f4","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,8,7,3]},"selected":{"id":"ba2e1c1c-4844-4208-8463-69f042812b2f","type":"Selection"},"selection_policy":{"id":"5eeb68e5-f084-4c65-8edf-357be88199ec","type":"UnionRenderers"}},"id":"bd95d855-fae5-4226-ae13-556742fcfab1","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"03c14aaa-a998-4f70-8a14-8946482f6456","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"c1d96b06-33cb-4d2b-931e-b9ec8ea488f8","type":"Circle"},{"attributes":{},"id":"b2987907-9faf-42e0-914e-242d2a9a315c","type":"WheelZoomTool"},{"attributes":{"plot":null,"text":""},"id":"a126a585-6c48-4bb5-82b3-349ab43a0d78","type":"Title"},{"attributes":{},"id":"000ac38c-3ce7-46d5-a76c-c923548eec3e","type":"SaveTool"},{"attributes":{"overlay":{"id":"03c14aaa-a998-4f70-8a14-8946482f6456","type":"BoxAnnotation"}},"id":"d75ee430-0d66-4070-a06d-e7c13c273d98","type":"BoxZoomTool"},{"attributes":{},"id":"7976116e-b600-43a2-9120-bca77911013b","type":"ResetTool"}],"root_ids":["d83df3fa-ff42-4266-9739-04392d5fe5b0"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"f49e6a46-5ad9-4295-8773-c8b0182328df","roots":{"d83df3fa-ff42-4266-9739-04392d5fe5b0":"22496da6-12fb-4cc2-91d8-f7d49e129645"}}];
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