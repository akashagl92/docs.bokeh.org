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
      };var element = document.getElementById("23d218d5-eb09-4d9c-a1d6-2ebd123a9c62");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '23d218d5-eb09-4d9c-a1d6-2ebd123a9c62' but no matching script tag was found. ")
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
                    var docs_json = {"c263246f-9197-428d-a6c9-ee29fffe7891":{"roots":{"references":[{"attributes":{},"id":"055892ae-0582-453c-9faf-7f4ba1cb607d","type":"LinearScale"},{"attributes":{},"id":"e19c2e04-47bd-44f2-a2e8-42b73b591888","type":"PanTool"},{"attributes":{"callback":null},"id":"db7d2ed1-67a9-4c08-8e36-907ecfc32076","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#CAB2D6"},"height":{"value":0.5},"line_color":{"value":"#CAB2D6"},"right":{"field":"right"},"y":{"field":"y"}},"id":"7413aeb4-969e-479c-91f6-f0425645a71a","type":"HBar"},{"attributes":{},"id":"a5871231-7365-4df4-ab45-126a7ea1bcbf","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"e19c2e04-47bd-44f2-a2e8-42b73b591888","type":"PanTool"},{"id":"faddfa16-dcf4-45c2-bab4-2be5e90cd190","type":"WheelZoomTool"},{"id":"f237b610-085e-4cb2-acab-b4913c57b2b0","type":"BoxZoomTool"},{"id":"13b92455-e21e-4e1a-93ab-5515a23d6b81","type":"SaveTool"},{"id":"51a3559a-8d35-4981-bf0c-c3b0f68b0aa7","type":"ResetTool"},{"id":"a02daf1a-3ab1-4add-9177-9db4a48e92ad","type":"HelpTool"}]},"id":"c7df4dc8-6251-4045-9c24-c7ad107a05dc","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["y","right"],"data":{"right":[1,2,3],"y":[1,2,3]}},"id":"20116f8a-7a48-444c-a5ef-2c686330d4f9","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"01816a46-ac7a-4db3-9a38-5f4e098250ab","subtype":"Figure","type":"Plot"},"ticker":{"id":"3e2d9e3e-1981-4c7f-bc88-6a1bd1d70f4f","type":"BasicTicker"}},"id":"97c9da66-e78b-4d7a-b76c-46512c8a51f9","type":"Grid"},{"attributes":{"source":{"id":"20116f8a-7a48-444c-a5ef-2c686330d4f9","type":"ColumnDataSource"}},"id":"bdb1c41d-8239-4fc0-833c-78126cd5c238","type":"CDSView"},{"attributes":{},"id":"51a3559a-8d35-4981-bf0c-c3b0f68b0aa7","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"e8145595-caae-475c-ab71-26871f1ca8ff","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.5},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"right"},"y":{"field":"y"}},"id":"8b48c85e-05b1-4752-82ad-f51f63948c3e","type":"HBar"},{"attributes":{},"id":"a13c71a6-1cad-4216-8557-a935f04d8d66","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"20116f8a-7a48-444c-a5ef-2c686330d4f9","type":"ColumnDataSource"},"glyph":{"id":"7413aeb4-969e-479c-91f6-f0425645a71a","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8b48c85e-05b1-4752-82ad-f51f63948c3e","type":"HBar"},"selection_glyph":null,"view":{"id":"bdb1c41d-8239-4fc0-833c-78126cd5c238","type":"CDSView"}},"id":"ffa06d9f-4cb7-4ab9-bb83-ae8c38634eec","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"3b1c17f2-bfdb-403b-b387-2e1beeb012ef","type":"BasicTickFormatter"},"plot":{"id":"01816a46-ac7a-4db3-9a38-5f4e098250ab","subtype":"Figure","type":"Plot"},"ticker":{"id":"3e2d9e3e-1981-4c7f-bc88-6a1bd1d70f4f","type":"BasicTicker"}},"id":"d42a25e7-759d-43ea-a105-e45d9834944c","type":"LinearAxis"},{"attributes":{"formatter":{"id":"a13c71a6-1cad-4216-8557-a935f04d8d66","type":"BasicTickFormatter"},"plot":{"id":"01816a46-ac7a-4db3-9a38-5f4e098250ab","subtype":"Figure","type":"Plot"},"ticker":{"id":"165d4b41-cb17-44cb-96af-0055877052cd","type":"BasicTicker"}},"id":"e9112c4f-670a-47b5-bf2e-a98dcea092a5","type":"LinearAxis"},{"attributes":{"overlay":{"id":"e8145595-caae-475c-ab71-26871f1ca8ff","type":"BoxAnnotation"}},"id":"f237b610-085e-4cb2-acab-b4913c57b2b0","type":"BoxZoomTool"},{"attributes":{"plot":null,"text":""},"id":"db8e9e0b-6879-4591-a325-ab22a3ccc473","type":"Title"},{"attributes":{},"id":"faddfa16-dcf4-45c2-bab4-2be5e90cd190","type":"WheelZoomTool"},{"attributes":{},"id":"3b1c17f2-bfdb-403b-b387-2e1beeb012ef","type":"BasicTickFormatter"},{"attributes":{},"id":"3e2d9e3e-1981-4c7f-bc88-6a1bd1d70f4f","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"01816a46-ac7a-4db3-9a38-5f4e098250ab","subtype":"Figure","type":"Plot"},"ticker":{"id":"165d4b41-cb17-44cb-96af-0055877052cd","type":"BasicTicker"}},"id":"3ab3121d-2114-4921-b639-8bbe95b4d8c5","type":"Grid"},{"attributes":{"callback":null},"id":"42e10c85-b3a6-4a73-ac04-1684e9e0e1c6","type":"DataRange1d"},{"attributes":{},"id":"165d4b41-cb17-44cb-96af-0055877052cd","type":"BasicTicker"},{"attributes":{"below":[{"id":"d42a25e7-759d-43ea-a105-e45d9834944c","type":"LinearAxis"}],"left":[{"id":"e9112c4f-670a-47b5-bf2e-a98dcea092a5","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"d42a25e7-759d-43ea-a105-e45d9834944c","type":"LinearAxis"},{"id":"97c9da66-e78b-4d7a-b76c-46512c8a51f9","type":"Grid"},{"id":"e9112c4f-670a-47b5-bf2e-a98dcea092a5","type":"LinearAxis"},{"id":"3ab3121d-2114-4921-b639-8bbe95b4d8c5","type":"Grid"},{"id":"e8145595-caae-475c-ab71-26871f1ca8ff","type":"BoxAnnotation"},{"id":"ffa06d9f-4cb7-4ab9-bb83-ae8c38634eec","type":"GlyphRenderer"}],"title":{"id":"db8e9e0b-6879-4591-a325-ab22a3ccc473","type":"Title"},"toolbar":{"id":"c7df4dc8-6251-4045-9c24-c7ad107a05dc","type":"Toolbar"},"x_range":{"id":"42e10c85-b3a6-4a73-ac04-1684e9e0e1c6","type":"DataRange1d"},"x_scale":{"id":"055892ae-0582-453c-9faf-7f4ba1cb607d","type":"LinearScale"},"y_range":{"id":"db7d2ed1-67a9-4c08-8e36-907ecfc32076","type":"DataRange1d"},"y_scale":{"id":"a5871231-7365-4df4-ab45-126a7ea1bcbf","type":"LinearScale"}},"id":"01816a46-ac7a-4db3-9a38-5f4e098250ab","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"a02daf1a-3ab1-4add-9177-9db4a48e92ad","type":"HelpTool"},{"attributes":{},"id":"13b92455-e21e-4e1a-93ab-5515a23d6b81","type":"SaveTool"}],"root_ids":["01816a46-ac7a-4db3-9a38-5f4e098250ab"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"c263246f-9197-428d-a6c9-ee29fffe7891","elementid":"23d218d5-eb09-4d9c-a1d6-2ebd123a9c62","modelid":"01816a46-ac7a-4db3-9a38-5f4e098250ab"}];
                
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
