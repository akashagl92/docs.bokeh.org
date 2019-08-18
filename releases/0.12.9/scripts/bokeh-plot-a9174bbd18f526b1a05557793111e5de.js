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
      };var element = document.getElementById("b2d1c68c-2676-49c7-a3ba-a1cd830064a9");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b2d1c68c-2676-49c7-a3ba-a1cd830064a9' but no matching script tag was found. ")
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
                    var docs_json = {"53cbc70c-f655-459a-bc47-38cc3e97349b":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"197d4a51-7ae9-45f4-9aaa-2320bb1d2225","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"197d4a51-7ae9-45f4-9aaa-2320bb1d2225","type":"ColumnDataSource"},"glyph":{"id":"99f84302-81c0-4a62-9b25-28da07f67e6e","type":"AnnularWedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1dfe7da5-b45f-4293-8c3c-1f97a64da50d","type":"AnnularWedge"},"selection_glyph":null,"view":{"id":"a606a584-7b29-451d-95b9-e332a6b3be3b","type":"CDSView"}},"id":"635dd6d6-f4cc-4516-82f2-fb6c3cf1e02b","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"da0672c0-65d3-4f8a-8d7d-c12c1ce01f72","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"38b70a8b-54e4-461c-8f97-6fa239fe5f60","type":"LinearAxis"}],"left":[{"id":"4c2c4c87-2b07-437e-8de2-71e1c8ead8b6","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"38b70a8b-54e4-461c-8f97-6fa239fe5f60","type":"LinearAxis"},{"id":"171651a5-87b1-4349-bc54-2dda8bf386b1","type":"Grid"},{"id":"4c2c4c87-2b07-437e-8de2-71e1c8ead8b6","type":"LinearAxis"},{"id":"99fc66b6-3f3d-4536-b27d-bb793a03166c","type":"Grid"},{"id":"da0672c0-65d3-4f8a-8d7d-c12c1ce01f72","type":"BoxAnnotation"},{"id":"635dd6d6-f4cc-4516-82f2-fb6c3cf1e02b","type":"GlyphRenderer"}],"title":{"id":"4234c1fd-509a-483a-8880-b6321cc522c1","type":"Title"},"toolbar":{"id":"32e21644-4915-474a-975a-36539e989a76","type":"Toolbar"},"x_range":{"id":"9567330c-0317-4b60-a2b2-f09ac20692de","type":"DataRange1d"},"x_scale":{"id":"6506ca32-7ce7-4740-9368-a2fdbd0e59e1","type":"LinearScale"},"y_range":{"id":"530f6da6-b010-4cec-b0bb-f7119a4a3906","type":"DataRange1d"},"y_scale":{"id":"e2310485-6ea2-4076-9d97-61852b153be9","type":"LinearScale"}},"id":"aa4ea5ff-b1d2-438d-a7af-e1ae9295442b","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"b673e999-04aa-44a9-83f5-a56b4a763262","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b673e999-04aa-44a9-83f5-a56b4a763262","type":"PanTool"},{"id":"c9f1cc02-53c9-4210-b7d2-195c736c82de","type":"WheelZoomTool"},{"id":"c84203ab-35a3-4133-9ac0-e74e0e03f9ff","type":"BoxZoomTool"},{"id":"ddf7575e-170c-4d98-9a49-61c5f970a5f6","type":"SaveTool"},{"id":"ee84d03c-a6e9-45f6-b549-62d77733f788","type":"ResetTool"},{"id":"4c0ef605-d534-475e-b5f1-84db4f502d06","type":"HelpTool"}]},"id":"32e21644-4915-474a-975a-36539e989a76","type":"Toolbar"},{"attributes":{"source":{"id":"197d4a51-7ae9-45f4-9aaa-2320bb1d2225","type":"ColumnDataSource"}},"id":"a606a584-7b29-451d-95b9-e332a6b3be3b","type":"CDSView"},{"attributes":{"formatter":{"id":"91ecaadf-a371-4254-bef3-97c9c862ac1b","type":"BasicTickFormatter"},"plot":{"id":"aa4ea5ff-b1d2-438d-a7af-e1ae9295442b","subtype":"Figure","type":"Plot"},"ticker":{"id":"3af54e4b-b065-43d0-9080-5f778d95c01b","type":"BasicTicker"}},"id":"38b70a8b-54e4-461c-8f97-6fa239fe5f60","type":"LinearAxis"},{"attributes":{},"id":"c9f1cc02-53c9-4210-b7d2-195c736c82de","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"9567330c-0317-4b60-a2b2-f09ac20692de","type":"DataRange1d"},{"attributes":{"overlay":{"id":"da0672c0-65d3-4f8a-8d7d-c12c1ce01f72","type":"BoxAnnotation"}},"id":"c84203ab-35a3-4133-9ac0-e74e0e03f9ff","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"aa4ea5ff-b1d2-438d-a7af-e1ae9295442b","subtype":"Figure","type":"Plot"},"ticker":{"id":"3af54e4b-b065-43d0-9080-5f778d95c01b","type":"BasicTicker"}},"id":"171651a5-87b1-4349-bc54-2dda8bf386b1","type":"Grid"},{"attributes":{},"id":"ddf7575e-170c-4d98-9a49-61c5f970a5f6","type":"SaveTool"},{"attributes":{"end_angle":{"units":"rad","value":4.8},"fill_alpha":{"value":0.6},"fill_color":{"value":"green"},"inner_radius":{"units":"data","value":0.1},"line_alpha":{"value":0.6},"line_color":{"value":"green"},"outer_radius":{"units":"data","value":0.25},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"99f84302-81c0-4a62-9b25-28da07f67e6e","type":"AnnularWedge"},{"attributes":{},"id":"ee84d03c-a6e9-45f6-b549-62d77733f788","type":"ResetTool"},{"attributes":{"callback":null},"id":"530f6da6-b010-4cec-b0bb-f7119a4a3906","type":"DataRange1d"},{"attributes":{},"id":"4c0ef605-d534-475e-b5f1-84db4f502d06","type":"HelpTool"},{"attributes":{},"id":"6506ca32-7ce7-4740-9368-a2fdbd0e59e1","type":"LinearScale"},{"attributes":{},"id":"e2310485-6ea2-4076-9d97-61852b153be9","type":"LinearScale"},{"attributes":{},"id":"3af54e4b-b065-43d0-9080-5f778d95c01b","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"4234c1fd-509a-483a-8880-b6321cc522c1","type":"Title"},{"attributes":{"formatter":{"id":"19268717-c52d-456d-b1fc-28c5516ea0ba","type":"BasicTickFormatter"},"plot":{"id":"aa4ea5ff-b1d2-438d-a7af-e1ae9295442b","subtype":"Figure","type":"Plot"},"ticker":{"id":"0c8c60fa-52db-4d7c-a7ed-080550499157","type":"BasicTicker"}},"id":"4c2c4c87-2b07-437e-8de2-71e1c8ead8b6","type":"LinearAxis"},{"attributes":{},"id":"19268717-c52d-456d-b1fc-28c5516ea0ba","type":"BasicTickFormatter"},{"attributes":{},"id":"0c8c60fa-52db-4d7c-a7ed-080550499157","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"aa4ea5ff-b1d2-438d-a7af-e1ae9295442b","subtype":"Figure","type":"Plot"},"ticker":{"id":"0c8c60fa-52db-4d7c-a7ed-080550499157","type":"BasicTicker"}},"id":"99fc66b6-3f3d-4536-b27d-bb793a03166c","type":"Grid"},{"attributes":{"end_angle":{"units":"rad","value":4.8},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"units":"data","value":0.25},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"1dfe7da5-b45f-4293-8c3c-1f97a64da50d","type":"AnnularWedge"},{"attributes":{},"id":"91ecaadf-a371-4254-bef3-97c9c862ac1b","type":"BasicTickFormatter"}],"root_ids":["aa4ea5ff-b1d2-438d-a7af-e1ae9295442b"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"53cbc70c-f655-459a-bc47-38cc3e97349b","elementid":"b2d1c68c-2676-49c7-a3ba-a1cd830064a9","modelid":"aa4ea5ff-b1d2-438d-a7af-e1ae9295442b"}];
                
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
