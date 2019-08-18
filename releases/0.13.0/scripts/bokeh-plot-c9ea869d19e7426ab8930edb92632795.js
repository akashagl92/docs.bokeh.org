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
      };var element = document.getElementById("4ff33f6e-249a-4c55-90f4-dc0fd5d815cc");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '4ff33f6e-249a-4c55-90f4-dc0fd5d815cc' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"115bae72-020e-4b9b-9535-2b07eec5fd08":{"roots":{"references":[{"attributes":{"callback":null},"id":"e3216aba-25b0-40ab-8907-cbb8cbbbbacf","type":"DataRange1d"},{"attributes":{"line_color":"pink","x":{"field":"x"},"y":{"field":"y"}},"id":"2e7c2f5b-ad1e-4be5-80d8-747abf48c3b0","type":"Line"},{"attributes":{"button_type":"success","callback":{"id":"cbd6fee8-d4d6-4dda-81b2-5d5367f39cd6","type":"CustomJS"},"icon":null,"label":"Green Box"},"id":"6e79eef5-2bd7-4096-afde-1a629b3b5814","type":"Toggle"},{"attributes":{},"id":"d7d48d07-decc-4542-9ec7-666d93e82fdc","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"6239c72e-2693-4406-ba86-e451d4f706a7","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"ef710442-f655-402b-9e29-d3fdc7f950c6","type":"Line"},{"attributes":{"dimension":1,"plot":{"id":"48c12d0c-e383-4905-972e-a935a7d1a785","subtype":"Figure","type":"Plot"},"ticker":{"id":"312a1cf1-f8ec-4dde-af19-0eb4ff254e23","type":"BasicTicker"}},"id":"7baa18d7-8d27-4907-8474-5efe47fa6e6d","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"727792ee-bf9d-4263-80ba-77ec221e6ba1","type":"Title"},{"attributes":{"callback":null},"id":"fc0067e9-fcd9-4f6e-ad50-104b2567179b","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[2,1,2]},"selected":{"id":"ceb110f7-b3fc-494c-93e9-6bbf5a4e3de9","type":"Selection"},"selection_policy":{"id":"aae018a2-539a-4c4e-a184-56bc3448b775","type":"UnionRenderers"}},"id":"e79fecc7-4582-48b8-903e-e0d78414dcc8","type":"ColumnDataSource"},{"attributes":{"children":[{"id":"94f69ca8-2b2f-465a-a319-9affd9b347ab","type":"Row"},{"id":"eed89259-e7fd-4724-a456-b66521c4238a","type":"Row"}]},"id":"e92a5933-83da-4d80-b077-4844d01caa88","type":"Column"},{"attributes":{},"id":"506e1e52-3c6d-4079-8a0f-2b56289163b0","type":"LinearScale"},{"attributes":{"children":[{"id":"ca53d93a-4f5b-4346-a6fd-2630d84bfe4f","type":"Toggle"}]},"id":"2bf9bf78-3e7f-4873-b9f7-f8a818a30b5d","type":"WidgetBox"},{"attributes":{},"id":"6b9c0400-7627-4012-b247-270ff8398f94","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"e79fecc7-4582-48b8-903e-e0d78414dcc8","type":"ColumnDataSource"}},"id":"e4867b50-9b10-4c00-bfed-98e832751284","type":"CDSView"},{"attributes":{},"id":"ceb110f7-b3fc-494c-93e9-6bbf5a4e3de9","type":"Selection"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,1]},"selected":{"id":"37b9fc5e-5c26-45fd-a4d3-628791a2e51c","type":"Selection"},"selection_policy":{"id":"bfda07c1-8869-419c-ab24-7a1fdb6a03e3","type":"UnionRenderers"}},"id":"10505865-3ef5-40eb-9516-8a858ecadc94","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"10505865-3ef5-40eb-9516-8a858ecadc94","type":"ColumnDataSource"},"glyph":{"id":"dbdd10a2-c11a-4375-b4b0-89bf81676f0d","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ef710442-f655-402b-9e29-d3fdc7f950c6","type":"Line"},"selection_glyph":null,"view":{"id":"d3663049-f19d-4615-ac03-f9d4d708635f","type":"CDSView"}},"id":"4d642008-8449-46d6-8656-e889baf2d47e","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"fd896685-f6f2-4481-90cc-e6f9ff4ee320","type":"Toolbar"},{"attributes":{},"id":"525eaf86-946b-4966-b2d0-c655efc5d883","type":"BasicTicker"},{"attributes":{},"id":"4c0d672f-0fa6-45a9-aaa7-1b04675125f8","type":"LinearScale"},{"attributes":{"source":{"id":"10505865-3ef5-40eb-9516-8a858ecadc94","type":"ColumnDataSource"}},"id":"d3663049-f19d-4615-ac03-f9d4d708635f","type":"CDSView"},{"attributes":{"formatter":{"id":"d7d48d07-decc-4542-9ec7-666d93e82fdc","type":"BasicTickFormatter"},"plot":{"id":"48c12d0c-e383-4905-972e-a935a7d1a785","subtype":"Figure","type":"Plot"},"ticker":{"id":"312a1cf1-f8ec-4dde-af19-0eb4ff254e23","type":"BasicTicker"}},"id":"10392df9-b9e4-4486-881e-58c0e35b6562","type":"LinearAxis"},{"attributes":{"children":[{"id":"6e79eef5-2bd7-4096-afde-1a629b3b5814","type":"Toggle"}]},"id":"eac786e8-11e3-4203-8d49-4caef4572133","type":"WidgetBox"},{"attributes":{"children":[{"id":"48c12d0c-e383-4905-972e-a935a7d1a785","subtype":"Figure","type":"Plot"}]},"id":"94f69ca8-2b2f-465a-a319-9affd9b347ab","type":"Row"},{"attributes":{"children":[{"id":"eac786e8-11e3-4203-8d49-4caef4572133","type":"WidgetBox"},{"id":"2bf9bf78-3e7f-4873-b9f7-f8a818a30b5d","type":"WidgetBox"}]},"id":"eed89259-e7fd-4724-a456-b66521c4238a","type":"Row"},{"attributes":{"button_type":"success","callback":{"id":"d2d9cdd5-0c7b-49b0-a2fa-6395b62f7453","type":"CustomJS"},"icon":null,"label":"Pink Line"},"id":"ca53d93a-4f5b-4346-a6fd-2630d84bfe4f","type":"Toggle"},{"attributes":{"line_color":"blue","x":{"field":"x"},"y":{"field":"y"}},"id":"dbdd10a2-c11a-4375-b4b0-89bf81676f0d","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"green"},"left":1.5,"plot":{"id":"48c12d0c-e383-4905-972e-a935a7d1a785","subtype":"Figure","type":"Plot"},"right":2.5},"id":"c01a0234-e783-413a-82f6-5dfeddf8c594","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"6b9c0400-7627-4012-b247-270ff8398f94","type":"BasicTickFormatter"},"plot":{"id":"48c12d0c-e383-4905-972e-a935a7d1a785","subtype":"Figure","type":"Plot"},"ticker":{"id":"525eaf86-946b-4966-b2d0-c655efc5d883","type":"BasicTicker"}},"id":"62117002-ad58-41a4-80b6-6d66df975c86","type":"LinearAxis"},{"attributes":{"data_source":{"id":"e79fecc7-4582-48b8-903e-e0d78414dcc8","type":"ColumnDataSource"},"glyph":{"id":"2e7c2f5b-ad1e-4be5-80d8-747abf48c3b0","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6239c72e-2693-4406-ba86-e451d4f706a7","type":"Line"},"selection_glyph":null,"view":{"id":"e4867b50-9b10-4c00-bfed-98e832751284","type":"CDSView"}},"id":"a0d73ed2-3b91-4783-994b-c13effd8c2c0","type":"GlyphRenderer"},{"attributes":{"args":{"object":{"id":"a0d73ed2-3b91-4783-994b-c13effd8c2c0","type":"GlyphRenderer"},"toggle":{"id":"ca53d93a-4f5b-4346-a6fd-2630d84bfe4f","type":"Toggle"}},"code":"object.visible = toggle.active;\\n"},"id":"d2d9cdd5-0c7b-49b0-a2fa-6395b62f7453","type":"CustomJS"},{"attributes":{},"id":"312a1cf1-f8ec-4dde-af19-0eb4ff254e23","type":"BasicTicker"},{"attributes":{},"id":"bfda07c1-8869-419c-ab24-7a1fdb6a03e3","type":"UnionRenderers"},{"attributes":{"args":{"object":{"id":"c01a0234-e783-413a-82f6-5dfeddf8c594","type":"BoxAnnotation"},"toggle":{"id":"6e79eef5-2bd7-4096-afde-1a629b3b5814","type":"Toggle"}},"code":"object.visible = toggle.active;\\n"},"id":"cbd6fee8-d4d6-4dda-81b2-5d5367f39cd6","type":"CustomJS"},{"attributes":{"below":[{"id":"62117002-ad58-41a4-80b6-6d66df975c86","type":"LinearAxis"}],"left":[{"id":"10392df9-b9e4-4486-881e-58c0e35b6562","type":"LinearAxis"}],"plot_height":200,"renderers":[{"id":"62117002-ad58-41a4-80b6-6d66df975c86","type":"LinearAxis"},{"id":"58726118-e878-4db6-b099-fa519860a570","type":"Grid"},{"id":"10392df9-b9e4-4486-881e-58c0e35b6562","type":"LinearAxis"},{"id":"7baa18d7-8d27-4907-8474-5efe47fa6e6d","type":"Grid"},{"id":"4d642008-8449-46d6-8656-e889baf2d47e","type":"GlyphRenderer"},{"id":"a0d73ed2-3b91-4783-994b-c13effd8c2c0","type":"GlyphRenderer"},{"id":"c01a0234-e783-413a-82f6-5dfeddf8c594","type":"BoxAnnotation"}],"title":{"id":"727792ee-bf9d-4263-80ba-77ec221e6ba1","type":"Title"},"toolbar":{"id":"fd896685-f6f2-4481-90cc-e6f9ff4ee320","type":"Toolbar"},"x_range":{"id":"e3216aba-25b0-40ab-8907-cbb8cbbbbacf","type":"DataRange1d"},"x_scale":{"id":"4c0d672f-0fa6-45a9-aaa7-1b04675125f8","type":"LinearScale"},"y_range":{"id":"fc0067e9-fcd9-4f6e-ad50-104b2567179b","type":"DataRange1d"},"y_scale":{"id":"506e1e52-3c6d-4079-8a0f-2b56289163b0","type":"LinearScale"}},"id":"48c12d0c-e383-4905-972e-a935a7d1a785","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"37b9fc5e-5c26-45fd-a4d3-628791a2e51c","type":"Selection"},{"attributes":{},"id":"aae018a2-539a-4c4e-a184-56bc3448b775","type":"UnionRenderers"},{"attributes":{"plot":{"id":"48c12d0c-e383-4905-972e-a935a7d1a785","subtype":"Figure","type":"Plot"},"ticker":{"id":"525eaf86-946b-4966-b2d0-c655efc5d883","type":"BasicTicker"}},"id":"58726118-e878-4db6-b099-fa519860a570","type":"Grid"}],"root_ids":["e92a5933-83da-4d80-b077-4844d01caa88"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"115bae72-020e-4b9b-9535-2b07eec5fd08","roots":{"e92a5933-83da-4d80-b077-4844d01caa88":"4ff33f6e-249a-4c55-90f4-dc0fd5d815cc"}}];
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