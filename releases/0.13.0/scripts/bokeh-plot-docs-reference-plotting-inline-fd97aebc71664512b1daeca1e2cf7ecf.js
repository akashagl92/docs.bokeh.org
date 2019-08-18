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
      };var element = document.getElementById("623663d7-b325-4259-bc8f-913dfac46a91");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '623663d7-b325-4259-bc8f-913dfac46a91' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"b521d87b-2b50-45f2-a6f3-70b4d64cd5c3":{"roots":{"references":[{"attributes":{},"id":"9845af19-26ac-4320-ac85-4ea3630d75e1","type":"BasicTickFormatter"},{"attributes":{},"id":"a6914fd3-8f64-4050-973c-5b531148b667","type":"BasicTicker"},{"attributes":{},"id":"d53ef115-10d6-49b4-862d-494090a670be","type":"PanTool"},{"attributes":{"formatter":{"id":"b0926d2c-976c-4f2d-95ae-520629103d38","type":"BasicTickFormatter"},"plot":{"id":"01b52519-9cc2-4ec6-bd46-cb3834b50166","subtype":"Figure","type":"Plot"},"ticker":{"id":"a6914fd3-8f64-4050-973c-5b531148b667","type":"BasicTicker"}},"id":"a8625cd0-a1ce-479a-801a-bbf506b580a4","type":"LinearAxis"},{"attributes":{"callback":null},"id":"17d88d83-300f-4888-abf0-d52bb975817e","type":"DataRange1d"},{"attributes":{},"id":"6db28d04-de6f-4454-839a-2fc4184f4f09","type":"Selection"},{"attributes":{"formatter":{"id":"9845af19-26ac-4320-ac85-4ea3630d75e1","type":"BasicTickFormatter"},"plot":{"id":"01b52519-9cc2-4ec6-bd46-cb3834b50166","subtype":"Figure","type":"Plot"},"ticker":{"id":"06b102d4-2016-44d2-a281-06e2932b0455","type":"BasicTicker"}},"id":"aee949e9-e705-4f95-ba93-87fd8e4160ad","type":"LinearAxis"},{"attributes":{},"id":"4706aef0-1744-4f25-b853-f51acdaf65bc","type":"ResetTool"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"6db28d04-de6f-4454-839a-2fc4184f4f09","type":"Selection"},"selection_policy":{"id":"d7a0b88b-71d6-45ce-a435-e59acd1ac5b9","type":"UnionRenderers"}},"id":"0f7f2be1-c811-430b-8bf3-cb05e7d75066","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"01b52519-9cc2-4ec6-bd46-cb3834b50166","subtype":"Figure","type":"Plot"},"ticker":{"id":"06b102d4-2016-44d2-a281-06e2932b0455","type":"BasicTicker"}},"id":"72098ad7-5f1d-4f76-bb56-ba99bbeb5152","type":"Grid"},{"attributes":{"overlay":{"id":"cb5a023a-ba59-4cf4-80e0-6236603a0c69","type":"BoxAnnotation"}},"id":"a20a7040-bfbc-4bd4-b78d-91fbbd3b285c","type":"BoxZoomTool"},{"attributes":{},"id":"d7a0b88b-71d6-45ce-a435-e59acd1ac5b9","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"db1458cf-5d63-4432-8386-4e742e39681b","type":"DataRange1d"},{"attributes":{"plot":null,"text":""},"id":"99ea1242-be2b-4961-80a0-4efeed51cc20","type":"Title"},{"attributes":{"source":{"id":"0f7f2be1-c811-430b-8bf3-cb05e7d75066","type":"ColumnDataSource"}},"id":"b9acbb29-12ce-4c71-9919-513a3093ba4a","type":"CDSView"},{"attributes":{},"id":"cc118811-a389-4934-911a-915b02d09caa","type":"LinearScale"},{"attributes":{},"id":"0ef0104c-6bd1-4ac2-ac6b-2b215137830c","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"d53ef115-10d6-49b4-862d-494090a670be","type":"PanTool"},{"id":"0ef0104c-6bd1-4ac2-ac6b-2b215137830c","type":"WheelZoomTool"},{"id":"a20a7040-bfbc-4bd4-b78d-91fbbd3b285c","type":"BoxZoomTool"},{"id":"7fe8283d-e96c-4e53-b381-4c0cedd16e8f","type":"SaveTool"},{"id":"4706aef0-1744-4f25-b853-f51acdaf65bc","type":"ResetTool"},{"id":"d6d6313b-7add-451d-a66e-f06aa5c6c74d","type":"HelpTool"}]},"id":"11288ab4-fc3d-484c-b98e-4c5e49484fe9","type":"Toolbar"},{"attributes":{},"id":"7fe8283d-e96c-4e53-b381-4c0cedd16e8f","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"0b091f6f-233c-408c-ac84-fc87330c6abb","type":"Asterisk"},{"attributes":{},"id":"d6d6313b-7add-451d-a66e-f06aa5c6c74d","type":"HelpTool"},{"attributes":{},"id":"df91fcd8-be1c-4977-8c45-6b0f4d6abae0","type":"LinearScale"},{"attributes":{"below":[{"id":"aee949e9-e705-4f95-ba93-87fd8e4160ad","type":"LinearAxis"}],"left":[{"id":"a8625cd0-a1ce-479a-801a-bbf506b580a4","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"aee949e9-e705-4f95-ba93-87fd8e4160ad","type":"LinearAxis"},{"id":"72098ad7-5f1d-4f76-bb56-ba99bbeb5152","type":"Grid"},{"id":"a8625cd0-a1ce-479a-801a-bbf506b580a4","type":"LinearAxis"},{"id":"5e6a93a4-e44c-40c8-a550-b1f99c1d5e64","type":"Grid"},{"id":"cb5a023a-ba59-4cf4-80e0-6236603a0c69","type":"BoxAnnotation"},{"id":"9b8c1f2f-0893-4a7e-b771-ce22ee70c9e7","type":"GlyphRenderer"}],"title":{"id":"99ea1242-be2b-4961-80a0-4efeed51cc20","type":"Title"},"toolbar":{"id":"11288ab4-fc3d-484c-b98e-4c5e49484fe9","type":"Toolbar"},"x_range":{"id":"17d88d83-300f-4888-abf0-d52bb975817e","type":"DataRange1d"},"x_scale":{"id":"df91fcd8-be1c-4977-8c45-6b0f4d6abae0","type":"LinearScale"},"y_range":{"id":"db1458cf-5d63-4432-8386-4e742e39681b","type":"DataRange1d"},"y_scale":{"id":"cc118811-a389-4934-911a-915b02d09caa","type":"LinearScale"}},"id":"01b52519-9cc2-4ec6-bd46-cb3834b50166","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"b0926d2c-976c-4f2d-95ae-520629103d38","type":"BasicTickFormatter"},{"attributes":{},"id":"06b102d4-2016-44d2-a281-06e2932b0455","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"01b52519-9cc2-4ec6-bd46-cb3834b50166","subtype":"Figure","type":"Plot"},"ticker":{"id":"a6914fd3-8f64-4050-973c-5b531148b667","type":"BasicTicker"}},"id":"5e6a93a4-e44c-40c8-a550-b1f99c1d5e64","type":"Grid"},{"attributes":{"data_source":{"id":"0f7f2be1-c811-430b-8bf3-cb05e7d75066","type":"ColumnDataSource"},"glyph":{"id":"01a7b593-a892-4e18-8878-f2a7da313823","type":"Asterisk"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0b091f6f-233c-408c-ac84-fc87330c6abb","type":"Asterisk"},"selection_glyph":null,"view":{"id":"b9acbb29-12ce-4c71-9919-513a3093ba4a","type":"CDSView"}},"id":"9b8c1f2f-0893-4a7e-b771-ce22ee70c9e7","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"cb5a023a-ba59-4cf4-80e0-6236603a0c69","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"#F0027F"},"line_color":{"value":"#F0027F"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"01a7b593-a892-4e18-8878-f2a7da313823","type":"Asterisk"}],"root_ids":["01b52519-9cc2-4ec6-bd46-cb3834b50166"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"b521d87b-2b50-45f2-a6f3-70b4d64cd5c3","roots":{"01b52519-9cc2-4ec6-bd46-cb3834b50166":"623663d7-b325-4259-bc8f-913dfac46a91"}}];
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