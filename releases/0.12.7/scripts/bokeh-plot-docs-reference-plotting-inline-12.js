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
      };var element = document.getElementById("93acaa57-c875-4283-ba92-2c61cdde8d71");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '93acaa57-c875-4283-ba92-2c61cdde8d71' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.7.min.js"];
    
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
                var docs_json = {"06027d8b-c193-4464-a023-350b3ab85ffc":{"roots":{"references":[{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"22cf3628-2681-4211-ab56-bd9eb73a502e","type":"MultiLine"},{"attributes":{},"id":"ff11e4c5-e583-4d0f-adf7-056848efe2b2","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"3bff0716-5119-4bad-a394-cafb3a7aeeb0","type":"ColumnDataSource"},"glyph":{"id":"0252e463-c56f-499d-a956-75397eee583d","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"22cf3628-2681-4211-ab56-bd9eb73a502e","type":"MultiLine"},"selection_glyph":null,"view":{"id":"0ba44a6c-23d6-402c-a890-b63626d94907","type":"CDSView"}},"id":"5068e372-4e57-4ab5-9488-4ede4bda63fa","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["xs","ys","line_color"],"data":{"line_color":["red","green"],"xs":[[1,2,3],[2,3,4]],"ys":[[6,7,2],[4,5,7]]}},"id":"3bff0716-5119-4bad-a394-cafb3a7aeeb0","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"e42735ca-8de5-4b08-8fc0-e9e67dc0d874","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"11f0ed1c-4368-4f89-b026-88019266dc21","type":"LinearAxis"}],"left":[{"id":"a42c6513-9c52-4123-997e-9baf2697eef4","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"11f0ed1c-4368-4f89-b026-88019266dc21","type":"LinearAxis"},{"id":"a19f6f87-c582-4931-a454-1ad1f8addd6e","type":"Grid"},{"id":"a42c6513-9c52-4123-997e-9baf2697eef4","type":"LinearAxis"},{"id":"192eb3a6-d296-42a0-bc58-5a6bfacb8c3d","type":"Grid"},{"id":"e42735ca-8de5-4b08-8fc0-e9e67dc0d874","type":"BoxAnnotation"},{"id":"5068e372-4e57-4ab5-9488-4ede4bda63fa","type":"GlyphRenderer"}],"title":{"id":"d08aeb4a-f3be-431e-8961-176cdcc94967","type":"Title"},"toolbar":{"id":"deee640e-c015-4b43-b8bf-bdd43ba79f81","type":"Toolbar"},"x_range":{"id":"31941bc6-6b9e-4eb4-a855-4d5613b1d261","type":"DataRange1d"},"x_scale":{"id":"a4bbb414-ee12-4bf5-bac3-c2ec98a77fb8","type":"LinearScale"},"y_range":{"id":"b94a5948-5d87-40bb-ac0a-bdb0da3952e1","type":"DataRange1d"},"y_scale":{"id":"eeedaaea-bf94-4f16-ab55-06950c856e7f","type":"LinearScale"}},"id":"d4d91007-cfd7-4182-95b2-82f15a4323d1","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"56e4a594-86bb-44df-b7f6-1a70620cd08c","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"56e4a594-86bb-44df-b7f6-1a70620cd08c","type":"PanTool"},{"id":"b8046792-fe3a-418a-88b6-30aa99d05ac4","type":"WheelZoomTool"},{"id":"7e171bd7-7516-449d-96b9-6d54228c6afb","type":"BoxZoomTool"},{"id":"83c6990f-44bf-4371-ad92-bb041cb7e2d2","type":"SaveTool"},{"id":"7db3bfd6-94d4-4888-b41d-d5e6f89fffb5","type":"ResetTool"},{"id":"47be00bc-c3ca-4704-9709-e5e6a4b5d756","type":"HelpTool"}]},"id":"deee640e-c015-4b43-b8bf-bdd43ba79f81","type":"Toolbar"},{"attributes":{"source":{"id":"3bff0716-5119-4bad-a394-cafb3a7aeeb0","type":"ColumnDataSource"}},"id":"0ba44a6c-23d6-402c-a890-b63626d94907","type":"CDSView"},{"attributes":{"callback":null},"id":"31941bc6-6b9e-4eb4-a855-4d5613b1d261","type":"DataRange1d"},{"attributes":{},"id":"b8046792-fe3a-418a-88b6-30aa99d05ac4","type":"WheelZoomTool"},{"attributes":{"line_color":{"field":"line_color"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"0252e463-c56f-499d-a956-75397eee583d","type":"MultiLine"},{"attributes":{"overlay":{"id":"e42735ca-8de5-4b08-8fc0-e9e67dc0d874","type":"BoxAnnotation"}},"id":"7e171bd7-7516-449d-96b9-6d54228c6afb","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"6a4fe570-471c-4d57-9f80-c64bdabaf7d4","type":"BasicTickFormatter"},"plot":{"id":"d4d91007-cfd7-4182-95b2-82f15a4323d1","subtype":"Figure","type":"Plot"},"ticker":{"id":"b69e3e18-bbc1-4133-a72b-fe24709a4171","type":"BasicTicker"}},"id":"a42c6513-9c52-4123-997e-9baf2697eef4","type":"LinearAxis"},{"attributes":{},"id":"83c6990f-44bf-4371-ad92-bb041cb7e2d2","type":"SaveTool"},{"attributes":{"callback":null},"id":"b94a5948-5d87-40bb-ac0a-bdb0da3952e1","type":"DataRange1d"},{"attributes":{},"id":"7db3bfd6-94d4-4888-b41d-d5e6f89fffb5","type":"ResetTool"},{"attributes":{},"id":"1b012995-ea68-4266-b39a-2e62963e091b","type":"BasicTicker"},{"attributes":{},"id":"47be00bc-c3ca-4704-9709-e5e6a4b5d756","type":"HelpTool"},{"attributes":{},"id":"a4bbb414-ee12-4bf5-bac3-c2ec98a77fb8","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"d08aeb4a-f3be-431e-8961-176cdcc94967","type":"Title"},{"attributes":{},"id":"eeedaaea-bf94-4f16-ab55-06950c856e7f","type":"LinearScale"},{"attributes":{"plot":{"id":"d4d91007-cfd7-4182-95b2-82f15a4323d1","subtype":"Figure","type":"Plot"},"ticker":{"id":"1b012995-ea68-4266-b39a-2e62963e091b","type":"BasicTicker"}},"id":"a19f6f87-c582-4931-a454-1ad1f8addd6e","type":"Grid"},{"attributes":{"formatter":{"id":"ff11e4c5-e583-4d0f-adf7-056848efe2b2","type":"BasicTickFormatter"},"plot":{"id":"d4d91007-cfd7-4182-95b2-82f15a4323d1","subtype":"Figure","type":"Plot"},"ticker":{"id":"1b012995-ea68-4266-b39a-2e62963e091b","type":"BasicTicker"}},"id":"11f0ed1c-4368-4f89-b026-88019266dc21","type":"LinearAxis"},{"attributes":{},"id":"6a4fe570-471c-4d57-9f80-c64bdabaf7d4","type":"BasicTickFormatter"},{"attributes":{},"id":"b69e3e18-bbc1-4133-a72b-fe24709a4171","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"d4d91007-cfd7-4182-95b2-82f15a4323d1","subtype":"Figure","type":"Plot"},"ticker":{"id":"b69e3e18-bbc1-4133-a72b-fe24709a4171","type":"BasicTicker"}},"id":"192eb3a6-d296-42a0-bc58-5a6bfacb8c3d","type":"Grid"}],"root_ids":["d4d91007-cfd7-4182-95b2-82f15a4323d1"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"06027d8b-c193-4464-a023-350b3ab85ffc","elementid":"93acaa57-c875-4283-ba92-2c61cdde8d71","modelid":"d4d91007-cfd7-4182-95b2-82f15a4323d1"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
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
