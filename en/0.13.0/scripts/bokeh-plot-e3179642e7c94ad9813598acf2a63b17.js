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
      };var element = document.getElementById("4fa3600e-7326-40ce-8e17-a0bc93aeea48");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '4fa3600e-7326-40ce-8e17-a0bc93aeea48' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"a91d781b-e733-4342-86ec-10b89f7200b4":{"roots":{"references":[{"attributes":{"renderers":[{"id":"b14d4184-b719-467f-98f4-82ebe737c965","type":"GlyphRenderer"},{"id":"bfd9e81b-6c69-43f1-b28a-7021781602dc","type":"GlyphRenderer"}],"vertex_renderer":{"id":"442de13a-6576-4267-b758-0bc70d3add30","type":"GlyphRenderer"}},"id":"c8e579f2-c76e-460b-8125-2902a171ba8b","type":"PolyEditTool"},{"attributes":{},"id":"e0f7036f-497f-44b0-be37-bcd3208429c0","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"119ba316-a6c0-45c1-a5d7-49afa3649bc0","type":"Patches"},{"attributes":{},"id":"48018905-8519-4fe3-954f-a964c175ccbf","type":"Selection"},{"attributes":{},"id":"3855f18a-e38a-44a0-80ac-15408e78b9a2","type":"PanTool"},{"attributes":{"callback":null,"data":{"x":[],"y":[]},"selected":{"id":"016435f9-98a5-4147-bfbe-8035d3d4045a","type":"Selection"},"selection_policy":{"id":"551246c6-1455-465c-9ac0-4c2fc9eb836b","type":"UnionRenderers"}},"id":"69c8c050-56e2-4d98-9e90-974c6b8529d2","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"3ebd95f7-925c-4e5b-8e7a-a5ae344aa8e9","type":"ColumnDataSource"},"glyph":{"id":"8caf0336-dbb2-4ae9-abb9-2a0072a518a6","type":"Patches"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8d344b09-99d8-4b56-b7b3-0b968c04b238","type":"Patches"},"selection_glyph":null,"view":{"id":"20f9faf3-5946-4379-bb89-cb1ebe5fc333","type":"CDSView"}},"id":"b14d4184-b719-467f-98f4-82ebe737c965","type":"GlyphRenderer"},{"attributes":{"source":{"id":"69c8c050-56e2-4d98-9e90-974c6b8529d2","type":"ColumnDataSource"}},"id":"d9e3127c-3bc5-4798-a92d-069cd19d5e6b","type":"CDSView"},{"attributes":{"callback":null,"end":10},"id":"dd2bd452-06e9-4c94-9bef-efde42cd1642","type":"Range1d"},{"attributes":{"formatter":{"id":"ee229787-4433-4cd6-b368-0e57fb1d5e5b","type":"BasicTickFormatter"},"plot":{"id":"da1484b8-f4dc-43b9-bc24-b8dd4b4b0038","subtype":"Figure","type":"Plot"},"ticker":{"id":"e0f7036f-497f-44b0-be37-bcd3208429c0","type":"BasicTicker"}},"id":"86c19e5b-ddf6-466f-a2ae-6cdf883e9572","type":"LinearAxis"},{"attributes":{"data_source":{"id":"69c8c050-56e2-4d98-9e90-974c6b8529d2","type":"ColumnDataSource"},"glyph":{"id":"bd87a027-64fb-40f8-8579-5d68273c8ea1","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e1be81a5-db44-42ba-95f3-0702c5c51e90","type":"Circle"},"selection_glyph":null,"view":{"id":"d9e3127c-3bc5-4798-a92d-069cd19d5e6b","type":"CDSView"}},"id":"442de13a-6576-4267-b758-0bc70d3add30","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"xs":[],"ys":[]},"selected":{"id":"9e9b82f0-87e6-437d-8e37-1bf20a3c42b7","type":"Selection"},"selection_policy":{"id":"7ae531d0-cfda-441f-aa16-1ba2c98bb810","type":"UnionRenderers"}},"id":"3ebd95f7-925c-4e5b-8e7a-a5ae344aa8e9","type":"ColumnDataSource"},{"attributes":{},"id":"2505d185-1c56-4b64-9447-f48395e2db76","type":"HelpTool"},{"attributes":{},"id":"1a9fddc8-5392-4ffc-9959-020ddf15ab35","type":"BasicTicker"},{"attributes":{"plot":null,"text":"Poly Edit Tool"},"id":"5b6b0961-4572-426a-b98f-da95c8aa3100","type":"Title"},{"attributes":{"data_source":{"id":"a84aac85-27fa-4301-bb7b-71ca2669acac","type":"ColumnDataSource"},"glyph":{"id":"b849101e-222a-4876-9f8c-92e27a9124ef","type":"Patches"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"119ba316-a6c0-45c1-a5d7-49afa3649bc0","type":"Patches"},"selection_glyph":null,"view":{"id":"5b2abf27-3df5-43e5-96eb-bbd67b795d83","type":"CDSView"}},"id":"bfd9e81b-6c69-43f1-b28a-7021781602dc","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"8d344b09-99d8-4b56-b7b3-0b968c04b238","type":"Patches"},{"attributes":{"source":{"id":"a84aac85-27fa-4301-bb7b-71ca2669acac","type":"ColumnDataSource"}},"id":"5b2abf27-3df5-43e5-96eb-bbd67b795d83","type":"CDSView"},{"attributes":{},"id":"016435f9-98a5-4147-bfbe-8035d3d4045a","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"e1be81a5-db44-42ba-95f3-0702c5c51e90","type":"Circle"},{"attributes":{"formatter":{"id":"6a529701-ff14-4dab-8ffa-367782403ef1","type":"BasicTickFormatter"},"plot":{"id":"da1484b8-f4dc-43b9-bc24-b8dd4b4b0038","subtype":"Figure","type":"Plot"},"ticker":{"id":"1a9fddc8-5392-4ffc-9959-020ddf15ab35","type":"BasicTicker"}},"id":"d90a7017-dc22-496a-9a07-a9a6e3d84728","type":"LinearAxis"},{"attributes":{},"id":"7ae531d0-cfda-441f-aa16-1ba2c98bb810","type":"UnionRenderers"},{"attributes":{},"id":"c060d232-a9a5-4b1a-8a71-db39a12e2a73","type":"LinearScale"},{"attributes":{},"id":"9e9b82f0-87e6-437d-8e37-1bf20a3c42b7","type":"Selection"},{"attributes":{"below":[{"id":"d90a7017-dc22-496a-9a07-a9a6e3d84728","type":"LinearAxis"}],"left":[{"id":"86c19e5b-ddf6-466f-a2ae-6cdf883e9572","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"d90a7017-dc22-496a-9a07-a9a6e3d84728","type":"LinearAxis"},{"id":"65354fa3-ba08-4669-bd25-ca3855bde82b","type":"Grid"},{"id":"86c19e5b-ddf6-466f-a2ae-6cdf883e9572","type":"LinearAxis"},{"id":"0068a455-fd6b-4b6e-bbf6-a1419e006977","type":"Grid"},{"id":"d5717b0b-e07f-4221-b4b2-006dff1166dc","type":"BoxAnnotation"},{"id":"b14d4184-b719-467f-98f4-82ebe737c965","type":"GlyphRenderer"},{"id":"bfd9e81b-6c69-43f1-b28a-7021781602dc","type":"GlyphRenderer"},{"id":"442de13a-6576-4267-b758-0bc70d3add30","type":"GlyphRenderer"}],"title":{"id":"5b6b0961-4572-426a-b98f-da95c8aa3100","type":"Title"},"toolbar":{"id":"53745d12-f6ee-49a9-866f-6be0f5ea7ea0","type":"Toolbar"},"x_range":{"id":"dd2bd452-06e9-4c94-9bef-efde42cd1642","type":"Range1d"},"x_scale":{"id":"c060d232-a9a5-4b1a-8a71-db39a12e2a73","type":"LinearScale"},"y_range":{"id":"223fa935-4804-499a-a412-d165b7e32234","type":"Range1d"},"y_scale":{"id":"67abff92-a70e-4ae6-a652-928d008f33e2","type":"LinearScale"}},"id":"da1484b8-f4dc-43b9-bc24-b8dd4b4b0038","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d5717b0b-e07f-4221-b4b2-006dff1166dc","type":"BoxAnnotation"},{"attributes":{},"id":"6a529701-ff14-4dab-8ffa-367782403ef1","type":"BasicTickFormatter"},{"attributes":{},"id":"551246c6-1455-465c-9ac0-4c2fc9eb836b","type":"UnionRenderers"},{"attributes":{"active_drag":{"id":"c8e579f2-c76e-460b-8125-2902a171ba8b","type":"PolyEditTool"},"active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"3855f18a-e38a-44a0-80ac-15408e78b9a2","type":"PanTool"},{"id":"a0ff699b-1e4f-4982-a985-3a3b14b61386","type":"WheelZoomTool"},{"id":"f81cfa70-4731-4210-8be4-68553709449a","type":"BoxZoomTool"},{"id":"e8cd1835-377d-4e9f-95d5-ea50d0050dda","type":"SaveTool"},{"id":"612113b4-56c7-4fdd-b266-227d0ee4b2d2","type":"ResetTool"},{"id":"2505d185-1c56-4b64-9447-f48395e2db76","type":"HelpTool"},{"id":"452eeed2-edb8-4123-a190-af8dde16616f","type":"PolyDrawTool"},{"id":"c8e579f2-c76e-460b-8125-2902a171ba8b","type":"PolyEditTool"}]},"id":"53745d12-f6ee-49a9-866f-6be0f5ea7ea0","type":"Toolbar"},{"attributes":{},"id":"ee229787-4433-4cd6-b368-0e57fb1d5e5b","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"bd87a027-64fb-40f8-8579-5d68273c8ea1","type":"Circle"},{"attributes":{},"id":"e8cd1835-377d-4e9f-95d5-ea50d0050dda","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.4},"fill_color":{"value":"green"},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"b849101e-222a-4876-9f8c-92e27a9124ef","type":"Patches"},{"attributes":{},"id":"67abff92-a70e-4ae6-a652-928d008f33e2","type":"LinearScale"},{"attributes":{"callback":null,"end":10},"id":"223fa935-4804-499a-a412-d165b7e32234","type":"Range1d"},{"attributes":{"fill_alpha":{"value":0.4},"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"8caf0336-dbb2-4ae9-abb9-2a0072a518a6","type":"Patches"},{"attributes":{},"id":"612113b4-56c7-4fdd-b266-227d0ee4b2d2","type":"ResetTool"},{"attributes":{},"id":"a0ff699b-1e4f-4982-a985-3a3b14b61386","type":"WheelZoomTool"},{"attributes":{"callback":null,"data":{"xs":[[1,2,3]],"ys":[[3,5,2]]},"selected":{"id":"48018905-8519-4fe3-954f-a964c175ccbf","type":"Selection"},"selection_policy":{"id":"da2f7f86-401d-4753-98f2-654a64424754","type":"UnionRenderers"}},"id":"a84aac85-27fa-4301-bb7b-71ca2669acac","type":"ColumnDataSource"},{"attributes":{},"id":"da2f7f86-401d-4753-98f2-654a64424754","type":"UnionRenderers"},{"attributes":{"renderers":[{"id":"b14d4184-b719-467f-98f4-82ebe737c965","type":"GlyphRenderer"},{"id":"bfd9e81b-6c69-43f1-b28a-7021781602dc","type":"GlyphRenderer"}]},"id":"452eeed2-edb8-4123-a190-af8dde16616f","type":"PolyDrawTool"},{"attributes":{"plot":{"id":"da1484b8-f4dc-43b9-bc24-b8dd4b4b0038","subtype":"Figure","type":"Plot"},"ticker":{"id":"1a9fddc8-5392-4ffc-9959-020ddf15ab35","type":"BasicTicker"}},"id":"65354fa3-ba08-4669-bd25-ca3855bde82b","type":"Grid"},{"attributes":{"overlay":{"id":"d5717b0b-e07f-4221-b4b2-006dff1166dc","type":"BoxAnnotation"}},"id":"f81cfa70-4731-4210-8be4-68553709449a","type":"BoxZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"da1484b8-f4dc-43b9-bc24-b8dd4b4b0038","subtype":"Figure","type":"Plot"},"ticker":{"id":"e0f7036f-497f-44b0-be37-bcd3208429c0","type":"BasicTicker"}},"id":"0068a455-fd6b-4b6e-bbf6-a1419e006977","type":"Grid"},{"attributes":{"source":{"id":"3ebd95f7-925c-4e5b-8e7a-a5ae344aa8e9","type":"ColumnDataSource"}},"id":"20f9faf3-5946-4379-bb89-cb1ebe5fc333","type":"CDSView"}],"root_ids":["da1484b8-f4dc-43b9-bc24-b8dd4b4b0038"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"a91d781b-e733-4342-86ec-10b89f7200b4","roots":{"da1484b8-f4dc-43b9-bc24-b8dd4b4b0038":"4fa3600e-7326-40ce-8e17-a0bc93aeea48"}}];
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