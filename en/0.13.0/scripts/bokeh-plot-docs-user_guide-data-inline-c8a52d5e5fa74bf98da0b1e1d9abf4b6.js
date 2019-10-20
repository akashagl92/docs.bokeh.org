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
      };var element = document.getElementById("87571d9a-75d1-473f-b684-73318d9205fa");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '87571d9a-75d1-473f-b684-73318d9205fa' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"aca3cc0f-b38f-49e2-8684-49f15f800caf":{"roots":{"references":[{"attributes":{"indices":[0,2,4]},"id":"4f7e6029-6b20-4361-8f15-3582502ba21b","type":"IndexFilter"},{"attributes":{"callback":null,"overlay":{"id":"b197b0da-711a-4161-a327-4aee9e4aecee","type":"BoxAnnotation"}},"id":"43a79167-44f4-48b5-8ce9-e2a0c50b5b84","type":"BoxSelectTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b197b0da-711a-4161-a327-4aee9e4aecee","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"a2e0c5b3-81a3-453d-a33b-05ce36d2bc0b","subtype":"Figure","type":"Plot"},"ticker":{"id":"e1a65885-81be-4e6c-b630-d5781e830e74","type":"BasicTicker"}},"id":"0af51015-95d3-4269-b459-be4a587b354b","type":"Grid"},{"attributes":{"below":[{"id":"3db08bdb-f49f-450f-97e8-2f23d2feb964","type":"LinearAxis"}],"left":[{"id":"286ef896-8c77-4621-997f-329bc624f72c","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"3db08bdb-f49f-450f-97e8-2f23d2feb964","type":"LinearAxis"},{"id":"0af51015-95d3-4269-b459-be4a587b354b","type":"Grid"},{"id":"286ef896-8c77-4621-997f-329bc624f72c","type":"LinearAxis"},{"id":"2b14a4f6-5290-4070-a009-e5c294af1226","type":"Grid"},{"id":"b197b0da-711a-4161-a327-4aee9e4aecee","type":"BoxAnnotation"},{"id":"afd1d19e-a102-47b3-aa8a-d1f7cff3dfea","type":"GlyphRenderer"}],"title":{"id":"43853234-3daf-4e58-a2db-65bf072c781c","type":"Title"},"toolbar":{"id":"8c2c2565-11d4-4161-bc93-480bb19daa90","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"af344510-46d9-4594-a880-bbb5d019bb7b","type":"DataRange1d"},"x_scale":{"id":"caea6af9-5d06-4732-bbbe-abcc5955e8a5","type":"LinearScale"},"y_range":{"id":"d47201c5-8d68-4a3e-b10c-0ff3276fd893","type":"DataRange1d"},"y_scale":{"id":"1831182f-27ff-4687-ad9f-60707eedc0be","type":"LinearScale"}},"id":"a2e0c5b3-81a3-453d-a33b-05ce36d2bc0b","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"2a6b71f4-b537-4b46-864c-efe849795a89","type":"Circle"},{"attributes":{"plot":{"id":"496dbc21-7ecc-4898-af7b-115fd4cd9b34","subtype":"Figure","type":"Plot"},"ticker":{"id":"9322e3d1-3a5e-4e0c-beb3-676cb81e1b44","type":"BasicTicker"}},"id":"166c2db4-7ded-405c-babd-4ed5064f2994","type":"Grid"},{"attributes":{"children":[{"id":"496dbc21-7ecc-4898-af7b-115fd4cd9b34","subtype":"Figure","type":"Plot"},{"id":"a2e0c5b3-81a3-453d-a33b-05ce36d2bc0b","subtype":"Figure","type":"Plot"}]},"id":"db21fe25-fb8d-4b8b-a01d-7601913967cd","type":"Row"},{"attributes":{"plot":null,"text":""},"id":"23c565a9-c855-4eaf-a37d-a6bc382c45bb","type":"Title"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"dee8800b-7c03-4af6-93eb-8cdeacdc1c28","type":"Circle"},{"attributes":{"data_source":{"id":"4b49ffc6-b031-405f-b923-1e27ae830a2f","type":"ColumnDataSource"},"glyph":{"id":"1755a91d-2c9c-4a84-bbce-e20943a1c8e6","type":"Circle"},"hover_glyph":{"id":"7dd67906-275a-4f6f-9e5a-758374e81a46","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"2a6b71f4-b537-4b46-864c-efe849795a89","type":"Circle"},"selection_glyph":null,"view":{"id":"6c25d93c-09ef-46b5-ba15-84845b5e559c","type":"CDSView"}},"id":"43adbdde-fd10-4cb0-b312-52fe7008f9ff","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"5c430ba4-0fff-4c98-b9a0-f24cc6743f66","type":"BasicTickFormatter"},"plot":{"id":"a2e0c5b3-81a3-453d-a33b-05ce36d2bc0b","subtype":"Figure","type":"Plot"},"ticker":{"id":"a71e207f-16b0-445b-9f84-fc040749f204","type":"BasicTicker"}},"id":"286ef896-8c77-4621-997f-329bc624f72c","type":"LinearAxis"},{"attributes":{},"id":"caea6af9-5d06-4732-bbbe-abcc5955e8a5","type":"LinearScale"},{"attributes":{"filters":[{"id":"4f7e6029-6b20-4361-8f15-3582502ba21b","type":"IndexFilter"}],"source":{"id":"4b49ffc6-b031-405f-b923-1e27ae830a2f","type":"ColumnDataSource"}},"id":"1160256c-de0e-4294-ba46-3dd90b46a26d","type":"CDSView"},{"attributes":{"callback":null,"overlay":{"id":"6559768d-a499-4530-90a6-c3ea7d5acd5d","type":"BoxAnnotation"}},"id":"e761821f-bafc-4555-a399-ac6af7dda0e0","type":"BoxSelectTool"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"c08e8383-d644-4cb0-b683-17d9a3ecaa70","type":"Circle"},{"attributes":{},"id":"d78fc9ac-03c8-45be-b177-4860f2a09b32","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"e761821f-bafc-4555-a399-ac6af7dda0e0","type":"BoxSelectTool"},{"id":"36090bb3-6c46-49c2-a786-1abdff2b961e","type":"HoverTool"},{"id":"724e7dda-8fd3-4fa7-9504-8a6c51006c5f","type":"ResetTool"}]},"id":"edeb14bb-421b-4a14-9839-5398e7dcc8db","type":"Toolbar"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[1,2,3,4,5]},"selected":{"id":"534e5057-7d43-4e7e-83bf-d0bede75332e","type":"Selection"},"selection_policy":{"id":"9b904a43-42e7-43fc-bf58-55cb8e5262f4","type":"UnionRenderers"}},"id":"4b49ffc6-b031-405f-b923-1e27ae830a2f","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"af344510-46d9-4594-a880-bbb5d019bb7b","type":"DataRange1d"},{"attributes":{},"id":"ab79751d-46e6-4a98-b89c-e56e9b1f3136","type":"BasicTickFormatter"},{"attributes":{},"id":"1831182f-27ff-4687-ad9f-60707eedc0be","type":"LinearScale"},{"attributes":{},"id":"e1a65885-81be-4e6c-b630-d5781e830e74","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"496dbc21-7ecc-4898-af7b-115fd4cd9b34","subtype":"Figure","type":"Plot"},"ticker":{"id":"a4116c26-073e-41e0-ad79-5416a5f349e1","type":"BasicTicker"}},"id":"25d34545-6c8d-4f4d-8d2d-99f673704419","type":"Grid"},{"attributes":{},"id":"5c430ba4-0fff-4c98-b9a0-f24cc6743f66","type":"BasicTickFormatter"},{"attributes":{},"id":"0db76155-9986-4172-8eb5-834dba8e49bf","type":"ResetTool"},{"attributes":{"formatter":{"id":"d78fc9ac-03c8-45be-b177-4860f2a09b32","type":"BasicTickFormatter"},"plot":{"id":"496dbc21-7ecc-4898-af7b-115fd4cd9b34","subtype":"Figure","type":"Plot"},"ticker":{"id":"9322e3d1-3a5e-4e0c-beb3-676cb81e1b44","type":"BasicTicker"}},"id":"c307f037-594a-4841-a9a1-d80e1595d59e","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"43853234-3daf-4e58-a2db-65bf072c781c","type":"Title"},{"attributes":{},"id":"534e5057-7d43-4e7e-83bf-d0bede75332e","type":"Selection"},{"attributes":{},"id":"e4b91358-5bf1-4399-86d0-6aaa33c7d0c7","type":"LinearScale"},{"attributes":{"tools":[{"id":"e761821f-bafc-4555-a399-ac6af7dda0e0","type":"BoxSelectTool"},{"id":"36090bb3-6c46-49c2-a786-1abdff2b961e","type":"HoverTool"},{"id":"724e7dda-8fd3-4fa7-9504-8a6c51006c5f","type":"ResetTool"},{"id":"43a79167-44f4-48b5-8ce9-e2a0c50b5b84","type":"BoxSelectTool"},{"id":"f0744050-fe78-4439-bb1d-025dce05e8e8","type":"HoverTool"},{"id":"0db76155-9986-4172-8eb5-834dba8e49bf","type":"ResetTool"}]},"id":"e830f6be-56b5-405f-9bfb-2c137bd73757","type":"ProxyToolbar"},{"attributes":{},"id":"a71e207f-16b0-445b-9f84-fc040749f204","type":"BasicTicker"},{"attributes":{"toolbar":{"id":"e830f6be-56b5-405f-9bfb-2c137bd73757","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"c3c411e2-6432-43ac-81b9-50aeb79119a4","type":"ToolbarBox"},{"attributes":{"dimension":1,"plot":{"id":"a2e0c5b3-81a3-453d-a33b-05ce36d2bc0b","subtype":"Figure","type":"Plot"},"ticker":{"id":"a71e207f-16b0-445b-9f84-fc040749f204","type":"BasicTicker"}},"id":"2b14a4f6-5290-4070-a009-e5c294af1226","type":"Grid"},{"attributes":{},"id":"724e7dda-8fd3-4fa7-9504-8a6c51006c5f","type":"ResetTool"},{"attributes":{"children":[{"id":"c3c411e2-6432-43ac-81b9-50aeb79119a4","type":"ToolbarBox"},{"id":"a1db9395-d33e-4e13-9772-8911c9344d7c","type":"Column"}]},"id":"a2a350bf-e44e-4b29-b92c-be29ee1c9f60","type":"Column"},{"attributes":{},"id":"fcb577e1-7223-4ca9-9ad6-ff6286a0df10","type":"LinearScale"},{"attributes":{"below":[{"id":"c307f037-594a-4841-a9a1-d80e1595d59e","type":"LinearAxis"}],"left":[{"id":"1a668bf9-ac1e-47bc-8105-fa6b55ff2991","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"c307f037-594a-4841-a9a1-d80e1595d59e","type":"LinearAxis"},{"id":"166c2db4-7ded-405c-babd-4ed5064f2994","type":"Grid"},{"id":"1a668bf9-ac1e-47bc-8105-fa6b55ff2991","type":"LinearAxis"},{"id":"25d34545-6c8d-4f4d-8d2d-99f673704419","type":"Grid"},{"id":"6559768d-a499-4530-90a6-c3ea7d5acd5d","type":"BoxAnnotation"},{"id":"43adbdde-fd10-4cb0-b312-52fe7008f9ff","type":"GlyphRenderer"}],"title":{"id":"23c565a9-c855-4eaf-a37d-a6bc382c45bb","type":"Title"},"toolbar":{"id":"edeb14bb-421b-4a14-9839-5398e7dcc8db","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"abddb679-5205-456f-927e-b729be333718","type":"DataRange1d"},"x_scale":{"id":"e4b91358-5bf1-4399-86d0-6aaa33c7d0c7","type":"LinearScale"},"y_range":{"id":"73e591ed-7f7f-410e-8355-d37259add314","type":"DataRange1d"},"y_scale":{"id":"fcb577e1-7223-4ca9-9ad6-ff6286a0df10","type":"LinearScale"}},"id":"496dbc21-7ecc-4898-af7b-115fd4cd9b34","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"a4116c26-073e-41e0-ad79-5416a5f349e1","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"6559768d-a499-4530-90a6-c3ea7d5acd5d","type":"BoxAnnotation"},{"attributes":{},"id":"f4362491-5af7-495e-8872-86ba49e935a9","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"43a79167-44f4-48b5-8ce9-e2a0c50b5b84","type":"BoxSelectTool"},{"id":"f0744050-fe78-4439-bb1d-025dce05e8e8","type":"HoverTool"},{"id":"0db76155-9986-4172-8eb5-834dba8e49bf","type":"ResetTool"}]},"id":"8c2c2565-11d4-4161-bc93-480bb19daa90","type":"Toolbar"},{"attributes":{},"id":"9322e3d1-3a5e-4e0c-beb3-676cb81e1b44","type":"BasicTicker"},{"attributes":{"callback":null},"id":"73e591ed-7f7f-410e-8355-d37259add314","type":"DataRange1d"},{"attributes":{"children":[{"id":"db21fe25-fb8d-4b8b-a01d-7601913967cd","type":"Row"}]},"id":"a1db9395-d33e-4e13-9772-8911c9344d7c","type":"Column"},{"attributes":{"callback":null},"id":"d47201c5-8d68-4a3e-b10c-0ff3276fd893","type":"DataRange1d"},{"attributes":{"callback":null},"id":"abddb679-5205-456f-927e-b729be333718","type":"DataRange1d"},{"attributes":{"source":{"id":"4b49ffc6-b031-405f-b923-1e27ae830a2f","type":"ColumnDataSource"}},"id":"6c25d93c-09ef-46b5-ba15-84845b5e559c","type":"CDSView"},{"attributes":{"formatter":{"id":"f4362491-5af7-495e-8872-86ba49e935a9","type":"BasicTickFormatter"},"plot":{"id":"496dbc21-7ecc-4898-af7b-115fd4cd9b34","subtype":"Figure","type":"Plot"},"ticker":{"id":"a4116c26-073e-41e0-ad79-5416a5f349e1","type":"BasicTicker"}},"id":"1a668bf9-ac1e-47bc-8105-fa6b55ff2991","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"7dd67906-275a-4f6f-9e5a-758374e81a46","type":"Circle"},{"attributes":{"callback":null,"renderers":"auto"},"id":"f0744050-fe78-4439-bb1d-025dce05e8e8","type":"HoverTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"ccbb88b9-9aa8-4818-bd08-94fc8c995e88","type":"Circle"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"1755a91d-2c9c-4a84-bbce-e20943a1c8e6","type":"Circle"},{"attributes":{"data_source":{"id":"4b49ffc6-b031-405f-b923-1e27ae830a2f","type":"ColumnDataSource"},"glyph":{"id":"dee8800b-7c03-4af6-93eb-8cdeacdc1c28","type":"Circle"},"hover_glyph":{"id":"c08e8383-d644-4cb0-b683-17d9a3ecaa70","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"ccbb88b9-9aa8-4818-bd08-94fc8c995e88","type":"Circle"},"selection_glyph":null,"view":{"id":"1160256c-de0e-4294-ba46-3dd90b46a26d","type":"CDSView"}},"id":"afd1d19e-a102-47b3-aa8a-d1f7cff3dfea","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"ab79751d-46e6-4a98-b89c-e56e9b1f3136","type":"BasicTickFormatter"},"plot":{"id":"a2e0c5b3-81a3-453d-a33b-05ce36d2bc0b","subtype":"Figure","type":"Plot"},"ticker":{"id":"e1a65885-81be-4e6c-b630-d5781e830e74","type":"BasicTicker"}},"id":"3db08bdb-f49f-450f-97e8-2f23d2feb964","type":"LinearAxis"},{"attributes":{},"id":"9b904a43-42e7-43fc-bf58-55cb8e5262f4","type":"UnionRenderers"},{"attributes":{"callback":null,"renderers":"auto"},"id":"36090bb3-6c46-49c2-a786-1abdff2b961e","type":"HoverTool"}],"root_ids":["a2a350bf-e44e-4b29-b92c-be29ee1c9f60"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"aca3cc0f-b38f-49e2-8684-49f15f800caf","roots":{"a2a350bf-e44e-4b29-b92c-be29ee1c9f60":"87571d9a-75d1-473f-b684-73318d9205fa"}}];
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