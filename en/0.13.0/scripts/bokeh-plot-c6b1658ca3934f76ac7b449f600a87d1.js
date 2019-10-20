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
      };var element = document.getElementById("95c112b2-5985-43b3-9fac-8159781330ad");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '95c112b2-5985-43b3-9fac-8159781330ad' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"d4ce2e33-f3c2-41b7-bbe3-25334f2abe78":{"roots":{"references":[{"attributes":{},"id":"92c7875e-3776-4405-bf80-ccabf236d1e2","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b083aeaf-3b23-477b-ab37-ce77e9e55709","type":"BoxAnnotation"},{"attributes":{"dimension":1,"plot":{"id":"4513a865-7a37-4074-b482-30e139a0e27f","subtype":"Figure","type":"Plot"},"ticker":{"id":"38d40a1d-84bd-4904-81c6-ddbaad413fcf","type":"BasicTicker"}},"id":"dcdd31b2-5f67-48fa-89aa-e245d984a824","type":"Grid"},{"attributes":{},"id":"bbe2e56d-0c91-4886-ab7f-668298052378","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"b81f2920-345a-405b-853e-8707998f201b","type":"PanTool"},{"id":"71ac994b-415d-4ac6-8304-05752603a49a","type":"WheelZoomTool"},{"id":"b01d982d-2e35-4913-ba4d-1c2c73c62d51","type":"BoxZoomTool"},{"id":"98997e9b-bc5d-419a-b3df-c626cb85a238","type":"SaveTool"},{"id":"64094c98-f045-48ee-84c3-1d33cd68ceb9","type":"ResetTool"},{"id":"fcbfeb87-4e8a-4805-bf08-cc1817d4e0a9","type":"HelpTool"}]},"id":"a77b0c76-d5c5-4897-9784-44f9056c61bb","type":"Toolbar"},{"attributes":{"data_source":{"id":"7c795589-c42e-43f1-b6d9-e6d372a55bab","type":"ColumnDataSource"},"glyph":{"id":"99798bf0-f4aa-4a57-8e66-c5eea1cd88db","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"dc3cf2a0-cabf-4418-9b6d-b47447436553","type":"Circle"},"selection_glyph":null,"view":{"id":"55e90719-6992-4b51-b35c-2ed0b0b1032b","type":"CDSView"}},"id":"21a23a57-474c-4865-b048-e35ff733e51b","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"00ff2211-1830-46d4-8c0a-447a16711eaf","type":"DataRange1d"},{"attributes":{},"id":"71ac994b-415d-4ac6-8304-05752603a49a","type":"WheelZoomTool"},{"attributes":{"callback":null,"data":{"height":[66,71,72,68,58,62],"names":["Mark","Amir","Matt","Greg","Owen","Juan"],"weight":[165,189,220,141,260,174]},"selected":{"id":"5321d116-a2cf-43b3-89d0-e82750cd73b6","type":"Selection"},"selection_policy":{"id":"92c7875e-3776-4405-bf80-ccabf236d1e2","type":"UnionRenderers"}},"id":"7c795589-c42e-43f1-b6d9-e6d372a55bab","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"4513a865-7a37-4074-b482-30e139a0e27f","subtype":"Figure","type":"Plot"},"ticker":{"id":"ccf311b3-1307-446d-8499-93ca98a37bad","type":"BasicTicker"}},"id":"80f54359-1d7e-4e93-98af-7743768706e4","type":"Grid"},{"attributes":{"plot":null,"text":"Dist. of 10th Grade Students at Lee High"},"id":"31f8226a-d8ff-4d70-9312-30659bc6eb5e","type":"Title"},{"attributes":{"below":[{"id":"40679763-9185-44c0-9e52-c52faec2b81e","type":"LinearAxis"}],"left":[{"id":"fa7c1e71-b168-44b5-a939-4d875d96b71e","type":"LinearAxis"}],"renderers":[{"id":"40679763-9185-44c0-9e52-c52faec2b81e","type":"LinearAxis"},{"id":"80f54359-1d7e-4e93-98af-7743768706e4","type":"Grid"},{"id":"fa7c1e71-b168-44b5-a939-4d875d96b71e","type":"LinearAxis"},{"id":"dcdd31b2-5f67-48fa-89aa-e245d984a824","type":"Grid"},{"id":"b083aeaf-3b23-477b-ab37-ce77e9e55709","type":"BoxAnnotation"},{"id":"21a23a57-474c-4865-b048-e35ff733e51b","type":"GlyphRenderer"},{"id":"ffa6e1cf-66bc-471b-a0f5-c0a0772fc804","type":"LabelSet"},{"id":"67027a6d-14a3-488f-8fd1-942030b07ad7","type":"Label"}],"title":{"id":"31f8226a-d8ff-4d70-9312-30659bc6eb5e","type":"Title"},"toolbar":{"id":"a77b0c76-d5c5-4897-9784-44f9056c61bb","type":"Toolbar"},"x_range":{"id":"ba474db9-0056-4f99-8e20-4316ab7f9e43","type":"Range1d"},"x_scale":{"id":"bbe2e56d-0c91-4886-ab7f-668298052378","type":"LinearScale"},"y_range":{"id":"00ff2211-1830-46d4-8c0a-447a16711eaf","type":"DataRange1d"},"y_scale":{"id":"0ebc836f-7fc4-4501-92d7-a59d99111f98","type":"LinearScale"}},"id":"4513a865-7a37-4074-b482-30e139a0e27f","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"98997e9b-bc5d-419a-b3df-c626cb85a238","type":"SaveTool"},{"attributes":{},"id":"0ebc836f-7fc4-4501-92d7-a59d99111f98","type":"LinearScale"},{"attributes":{},"id":"b81f2920-345a-405b-853e-8707998f201b","type":"PanTool"},{"attributes":{"source":{"id":"7c795589-c42e-43f1-b6d9-e6d372a55bab","type":"ColumnDataSource"}},"id":"55e90719-6992-4b51-b35c-2ed0b0b1032b","type":"CDSView"},{"attributes":{"level":"glyph","plot":{"id":"4513a865-7a37-4074-b482-30e139a0e27f","subtype":"Figure","type":"Plot"},"source":{"id":"7c795589-c42e-43f1-b6d9-e6d372a55bab","type":"ColumnDataSource"},"text":{"field":"names"},"x":{"field":"weight"},"x_offset":{"value":5},"y":{"field":"height"},"y_offset":{"value":5}},"id":"ffa6e1cf-66bc-471b-a0f5-c0a0772fc804","type":"LabelSet"},{"attributes":{"callback":null,"end":275,"start":140},"id":"ba474db9-0056-4f99-8e20-4316ab7f9e43","type":"Range1d"},{"attributes":{},"id":"5321d116-a2cf-43b3-89d0-e82750cd73b6","type":"Selection"},{"attributes":{},"id":"ccf311b3-1307-446d-8499-93ca98a37bad","type":"BasicTicker"},{"attributes":{"background_fill_color":{"value":"white"},"border_line_color":{"value":"black"},"plot":{"id":"4513a865-7a37-4074-b482-30e139a0e27f","subtype":"Figure","type":"Plot"},"render_mode":"css","text":"Collected by Luke C. 2016-04-01","x":70,"x_units":"screen","y":70,"y_units":"screen"},"id":"67027a6d-14a3-488f-8fd1-942030b07ad7","type":"Label"},{"attributes":{"axis_label":"Weight (lbs)","formatter":{"id":"cd88491d-2cee-49d7-9416-fb38be229eb1","type":"BasicTickFormatter"},"plot":{"id":"4513a865-7a37-4074-b482-30e139a0e27f","subtype":"Figure","type":"Plot"},"ticker":{"id":"ccf311b3-1307-446d-8499-93ca98a37bad","type":"BasicTicker"}},"id":"40679763-9185-44c0-9e52-c52faec2b81e","type":"LinearAxis"},{"attributes":{},"id":"64094c98-f045-48ee-84c3-1d33cd68ceb9","type":"ResetTool"},{"attributes":{},"id":"38d40a1d-84bd-4904-81c6-ddbaad413fcf","type":"BasicTicker"},{"attributes":{"overlay":{"id":"b083aeaf-3b23-477b-ab37-ce77e9e55709","type":"BoxAnnotation"}},"id":"b01d982d-2e35-4913-ba4d-1c2c73c62d51","type":"BoxZoomTool"},{"attributes":{"axis_label":"Height (in)","formatter":{"id":"ee8fbf0f-f430-4a2b-9c5a-e71f94b51949","type":"BasicTickFormatter"},"plot":{"id":"4513a865-7a37-4074-b482-30e139a0e27f","subtype":"Figure","type":"Plot"},"ticker":{"id":"38d40a1d-84bd-4904-81c6-ddbaad413fcf","type":"BasicTicker"}},"id":"fa7c1e71-b168-44b5-a939-4d875d96b71e","type":"LinearAxis"},{"attributes":{},"id":"ee8fbf0f-f430-4a2b-9c5a-e71f94b51949","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"weight"},"y":{"field":"height"}},"id":"99798bf0-f4aa-4a57-8e66-c5eea1cd88db","type":"Circle"},{"attributes":{},"id":"cd88491d-2cee-49d7-9416-fb38be229eb1","type":"BasicTickFormatter"},{"attributes":{},"id":"fcbfeb87-4e8a-4805-bf08-cc1817d4e0a9","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"weight"},"y":{"field":"height"}},"id":"dc3cf2a0-cabf-4418-9b6d-b47447436553","type":"Circle"}],"root_ids":["4513a865-7a37-4074-b482-30e139a0e27f"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"d4ce2e33-f3c2-41b7-bbe3-25334f2abe78","roots":{"4513a865-7a37-4074-b482-30e139a0e27f":"95c112b2-5985-43b3-9fac-8159781330ad"}}];
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