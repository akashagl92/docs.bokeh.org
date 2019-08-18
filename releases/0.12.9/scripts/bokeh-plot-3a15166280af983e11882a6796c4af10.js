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
      };var element = document.getElementById("fb8cd48f-c737-472b-af59-39aba8d21da2");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'fb8cd48f-c737-472b-af59-39aba8d21da2' but no matching script tag was found. ")
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
                    var docs_json = {"5767c4dd-d531-43b9-89fd-5f5481310ccd":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"03363b5f-c71c-4c69-8042-bda33677fbaa","type":"PanTool"},{"id":"42713d16-de16-4b65-aab8-51542666eb65","type":"WheelZoomTool"},{"id":"de4a5dde-f32a-497c-ada7-87a7a5601ada","type":"BoxZoomTool"},{"id":"107e2341-fe30-43d1-87bf-685b281347ce","type":"SaveTool"},{"id":"19909abf-1750-4213-9da3-2d5551f45b30","type":"ResetTool"},{"id":"454f657a-7977-46b9-8fbf-843afc6014be","type":"HelpTool"}]},"id":"3bb1810d-208a-4443-b27d-384ffe2d9e5d","type":"Toolbar"},{"attributes":{"data_source":{"id":"3182f296-3013-4348-b92d-17563b654c67","type":"ColumnDataSource"},"glyph":{"id":"795ceb30-0382-4e85-ac39-722eed5a8826","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a191d251-21eb-4bcc-950c-b4974d44c9e7","type":"Circle"},"selection_glyph":null,"view":{"id":"f1af04f0-1482-46c0-a9dc-9f4794135ac8","type":"CDSView"}},"id":"f22df2b9-6b78-4628-bceb-bd1f4fb742c3","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"3182f296-3013-4348-b92d-17563b654c67","type":"ColumnDataSource"},{"attributes":{},"id":"03363b5f-c71c-4c69-8042-bda33677fbaa","type":"PanTool"},{"attributes":{},"id":"7e30ba37-56ff-4fcf-b22b-5d142f796efe","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"795ceb30-0382-4e85-ac39-722eed5a8826","type":"Circle"},{"attributes":{"source":{"id":"3182f296-3013-4348-b92d-17563b654c67","type":"ColumnDataSource"}},"id":"f1af04f0-1482-46c0-a9dc-9f4794135ac8","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"ef933acc-b679-44ff-a99e-e9207fbc1aaf","subtype":"Figure","type":"Plot"},"ticker":{"id":"115a3717-2bd2-44b5-bc2f-645b69c29085","type":"BasicTicker"}},"id":"a2f49698-252a-4f36-8478-bf7ceb145180","type":"Grid"},{"attributes":{"callback":null},"id":"1ca73282-0aba-4365-9360-59bfd4a38071","type":"DataRange1d"},{"attributes":{"formatter":{"id":"e242bd5e-668e-4a46-9a21-c47113c1335f","type":"BasicTickFormatter"},"plot":{"id":"ef933acc-b679-44ff-a99e-e9207fbc1aaf","subtype":"Figure","type":"Plot"},"ticker":{"id":"7e30ba37-56ff-4fcf-b22b-5d142f796efe","type":"BasicTicker"}},"id":"109b71d0-d053-463d-8d00-39f6015d47fe","type":"LinearAxis"},{"attributes":{},"id":"19909abf-1750-4213-9da3-2d5551f45b30","type":"ResetTool"},{"attributes":{"plot":null,"text":""},"id":"7ebca288-ab28-4855-996b-6285bc34945c","type":"Title"},{"attributes":{"formatter":{"id":"596b52ef-0bbf-4be3-bd61-bc7a2581df49","type":"BasicTickFormatter"},"plot":{"id":"ef933acc-b679-44ff-a99e-e9207fbc1aaf","subtype":"Figure","type":"Plot"},"ticker":{"id":"115a3717-2bd2-44b5-bc2f-645b69c29085","type":"BasicTicker"}},"id":"c580ee25-dd73-4fa5-aef0-6fcfada9b362","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"a191d251-21eb-4bcc-950c-b4974d44c9e7","type":"Circle"},{"attributes":{},"id":"596b52ef-0bbf-4be3-bd61-bc7a2581df49","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"ef933acc-b679-44ff-a99e-e9207fbc1aaf","subtype":"Figure","type":"Plot"},"ticker":{"id":"7e30ba37-56ff-4fcf-b22b-5d142f796efe","type":"BasicTicker"}},"id":"bd15adfe-04c5-4323-9170-f14ba8f53168","type":"Grid"},{"attributes":{},"id":"42713d16-de16-4b65-aab8-51542666eb65","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"109b71d0-d053-463d-8d00-39f6015d47fe","type":"LinearAxis"}],"border_fill_color":{"value":"whitesmoke"},"left":[{"id":"c580ee25-dd73-4fa5-aef0-6fcfada9b362","type":"LinearAxis"}],"min_border_left":80,"plot_height":400,"plot_width":400,"renderers":[{"id":"109b71d0-d053-463d-8d00-39f6015d47fe","type":"LinearAxis"},{"id":"bd15adfe-04c5-4323-9170-f14ba8f53168","type":"Grid"},{"id":"c580ee25-dd73-4fa5-aef0-6fcfada9b362","type":"LinearAxis"},{"id":"a2f49698-252a-4f36-8478-bf7ceb145180","type":"Grid"},{"id":"056e3659-07df-43d1-944d-02b938b36fff","type":"BoxAnnotation"},{"id":"f22df2b9-6b78-4628-bceb-bd1f4fb742c3","type":"GlyphRenderer"}],"title":{"id":"7ebca288-ab28-4855-996b-6285bc34945c","type":"Title"},"toolbar":{"id":"3bb1810d-208a-4443-b27d-384ffe2d9e5d","type":"Toolbar"},"x_range":{"id":"3a4978aa-9d77-48a5-bdb7-1537bdaa03eb","type":"DataRange1d"},"x_scale":{"id":"c672cd04-c0d7-49cc-b948-c5c695018a54","type":"LinearScale"},"y_range":{"id":"1ca73282-0aba-4365-9360-59bfd4a38071","type":"DataRange1d"},"y_scale":{"id":"9add64dc-74f2-4fe7-8b3a-e25e58ec5a89","type":"LinearScale"}},"id":"ef933acc-b679-44ff-a99e-e9207fbc1aaf","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"e242bd5e-668e-4a46-9a21-c47113c1335f","type":"BasicTickFormatter"},{"attributes":{},"id":"115a3717-2bd2-44b5-bc2f-645b69c29085","type":"BasicTicker"},{"attributes":{"callback":null},"id":"3a4978aa-9d77-48a5-bdb7-1537bdaa03eb","type":"DataRange1d"},{"attributes":{},"id":"454f657a-7977-46b9-8fbf-843afc6014be","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"056e3659-07df-43d1-944d-02b938b36fff","type":"BoxAnnotation"},{"attributes":{},"id":"9add64dc-74f2-4fe7-8b3a-e25e58ec5a89","type":"LinearScale"},{"attributes":{},"id":"c672cd04-c0d7-49cc-b948-c5c695018a54","type":"LinearScale"},{"attributes":{},"id":"107e2341-fe30-43d1-87bf-685b281347ce","type":"SaveTool"},{"attributes":{"overlay":{"id":"056e3659-07df-43d1-944d-02b938b36fff","type":"BoxAnnotation"}},"id":"de4a5dde-f32a-497c-ada7-87a7a5601ada","type":"BoxZoomTool"}],"root_ids":["ef933acc-b679-44ff-a99e-e9207fbc1aaf"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"5767c4dd-d531-43b9-89fd-5f5481310ccd","elementid":"fb8cd48f-c737-472b-af59-39aba8d21da2","modelid":"ef933acc-b679-44ff-a99e-e9207fbc1aaf"}];
                
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
