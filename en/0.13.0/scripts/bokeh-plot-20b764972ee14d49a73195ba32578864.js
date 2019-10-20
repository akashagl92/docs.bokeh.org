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
      };var element = document.getElementById("e32ffcd2-d8b5-4d81-8c34-c5d10bdb1ba4");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e32ffcd2-d8b5-4d81-8c34-c5d10bdb1ba4' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"8350e934-6488-49ee-8675-f7184ec7c052":{"roots":{"references":[{"attributes":{},"id":"e90ef39f-0cfd-421f-830c-968800cb2036","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"x":[1,2],"y":[3,4]},"selected":{"id":"89301d66-7eb5-4882-b743-d8cb836f2003","type":"Selection"},"selection_policy":{"id":"f7e9a4ee-69fe-4354-93e4-527fc78775b3","type":"UnionRenderers"}},"id":"c703c8f7-f2da-478f-a6df-788a738a7bd4","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"c703c8f7-f2da-478f-a6df-788a738a7bd4","type":"ColumnDataSource"},"glyph":{"id":"823d31df-5a18-4bf1-8d71-cb05ca64ef48","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"263e9675-e7fb-4657-89f8-429073cb078e","type":"Circle"},"selection_glyph":null,"view":{"id":"fa2add82-6aac-4b43-8dfd-ab9bd365644e","type":"CDSView"}},"id":"01fb5dee-e5c6-438e-b4a6-5256a12cf383","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d2cb5f82-e21f-415a-91c8-a977c650c3d8","type":"BoxAnnotation"},{"attributes":{},"id":"a8c09752-0610-4414-8d34-58d808302c60","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"263e9675-e7fb-4657-89f8-429073cb078e","type":"Circle"},{"attributes":{},"id":"221b025d-4dd9-405a-861d-725528d2665a","type":"BasicTickFormatter"},{"attributes":{},"id":"719c4586-7811-41b9-a441-54a70d2bddac","type":"HelpTool"},{"attributes":{"below":[{"id":"21369fc1-0312-4560-afd2-228c53cc4799","type":"LinearAxis"}],"left":[{"id":"2b025727-1430-421f-b189-29056c605336","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"21369fc1-0312-4560-afd2-228c53cc4799","type":"LinearAxis"},{"id":"ea339ade-da83-4d26-a95a-6ef89160cd26","type":"Grid"},{"id":"2b025727-1430-421f-b189-29056c605336","type":"LinearAxis"},{"id":"5c47ea3e-cafe-40a0-bee7-295c63caeb2e","type":"Grid"},{"id":"d2cb5f82-e21f-415a-91c8-a977c650c3d8","type":"BoxAnnotation"},{"id":"01fb5dee-e5c6-438e-b4a6-5256a12cf383","type":"GlyphRenderer"}],"title":{"id":"fe9c5132-a06b-4ac8-97c8-dce494c0d1c4","type":"Title"},"title_location":"left","toolbar":{"id":"c0a605a6-5b1e-46bd-aea2-d792bff029cd","type":"Toolbar"},"x_range":{"id":"f35393e6-bd71-41b0-8a3e-7ebc24ae63a9","type":"DataRange1d"},"x_scale":{"id":"ce94081f-a34c-4670-a8e7-c7ed49802b5b","type":"LinearScale"},"y_range":{"id":"cc1b19ab-3b62-48d8-9614-201d22149b6e","type":"DataRange1d"},"y_scale":{"id":"a8c09752-0610-4414-8d34-58d808302c60","type":"LinearScale"}},"id":"5967238a-f3f2-485e-9616-1f52c0d6bef0","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"ce94081f-a34c-4670-a8e7-c7ed49802b5b","type":"LinearScale"},{"attributes":{},"id":"89301d66-7eb5-4882-b743-d8cb836f2003","type":"Selection"},{"attributes":{"overlay":{"id":"d2cb5f82-e21f-415a-91c8-a977c650c3d8","type":"BoxAnnotation"}},"id":"11c7df89-fe03-4103-9e74-81bb73371831","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"cc1b19ab-3b62-48d8-9614-201d22149b6e","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"823d31df-5a18-4bf1-8d71-cb05ca64ef48","type":"Circle"},{"attributes":{},"id":"4aae3f9a-d2a8-448c-89cb-97f3698a52a0","type":"BasicTicker"},{"attributes":{},"id":"42149453-ee14-4b46-b168-e9c74a7e9c68","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"Left Title"},"id":"fe9c5132-a06b-4ac8-97c8-dce494c0d1c4","type":"Title"},{"attributes":{"callback":null},"id":"f35393e6-bd71-41b0-8a3e-7ebc24ae63a9","type":"DataRange1d"},{"attributes":{},"id":"3648f15c-fc76-4521-b811-199542e80a57","type":"WheelZoomTool"},{"attributes":{},"id":"aab2b38e-faf4-4eea-8781-ae31fbb23198","type":"PanTool"},{"attributes":{},"id":"b8e2ff7f-92f5-4a6e-b441-014e1e4e8aec","type":"SaveTool"},{"attributes":{"dimension":1,"plot":{"id":"5967238a-f3f2-485e-9616-1f52c0d6bef0","subtype":"Figure","type":"Plot"},"ticker":{"id":"e90ef39f-0cfd-421f-830c-968800cb2036","type":"BasicTicker"}},"id":"5c47ea3e-cafe-40a0-bee7-295c63caeb2e","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"aab2b38e-faf4-4eea-8781-ae31fbb23198","type":"PanTool"},{"id":"3648f15c-fc76-4521-b811-199542e80a57","type":"WheelZoomTool"},{"id":"11c7df89-fe03-4103-9e74-81bb73371831","type":"BoxZoomTool"},{"id":"b8e2ff7f-92f5-4a6e-b441-014e1e4e8aec","type":"SaveTool"},{"id":"1c550888-6580-4415-9c6f-5fde0b228082","type":"ResetTool"},{"id":"719c4586-7811-41b9-a441-54a70d2bddac","type":"HelpTool"}]},"id":"c0a605a6-5b1e-46bd-aea2-d792bff029cd","type":"Toolbar"},{"attributes":{},"id":"1c550888-6580-4415-9c6f-5fde0b228082","type":"ResetTool"},{"attributes":{"formatter":{"id":"42149453-ee14-4b46-b168-e9c74a7e9c68","type":"BasicTickFormatter"},"plot":{"id":"5967238a-f3f2-485e-9616-1f52c0d6bef0","subtype":"Figure","type":"Plot"},"ticker":{"id":"4aae3f9a-d2a8-448c-89cb-97f3698a52a0","type":"BasicTicker"}},"id":"21369fc1-0312-4560-afd2-228c53cc4799","type":"LinearAxis"},{"attributes":{"source":{"id":"c703c8f7-f2da-478f-a6df-788a738a7bd4","type":"ColumnDataSource"}},"id":"fa2add82-6aac-4b43-8dfd-ab9bd365644e","type":"CDSView"},{"attributes":{},"id":"f7e9a4ee-69fe-4354-93e4-527fc78775b3","type":"UnionRenderers"},{"attributes":{"plot":{"id":"5967238a-f3f2-485e-9616-1f52c0d6bef0","subtype":"Figure","type":"Plot"},"ticker":{"id":"4aae3f9a-d2a8-448c-89cb-97f3698a52a0","type":"BasicTicker"}},"id":"ea339ade-da83-4d26-a95a-6ef89160cd26","type":"Grid"},{"attributes":{"formatter":{"id":"221b025d-4dd9-405a-861d-725528d2665a","type":"BasicTickFormatter"},"plot":{"id":"5967238a-f3f2-485e-9616-1f52c0d6bef0","subtype":"Figure","type":"Plot"},"ticker":{"id":"e90ef39f-0cfd-421f-830c-968800cb2036","type":"BasicTicker"}},"id":"2b025727-1430-421f-b189-29056c605336","type":"LinearAxis"}],"root_ids":["5967238a-f3f2-485e-9616-1f52c0d6bef0"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"8350e934-6488-49ee-8675-f7184ec7c052","roots":{"5967238a-f3f2-485e-9616-1f52c0d6bef0":"e32ffcd2-d8b5-4d81-8c34-c5d10bdb1ba4"}}];
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