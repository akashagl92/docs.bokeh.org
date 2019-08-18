(function() {
  var fn = function() {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force === true) {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        delete window._bokeh_onload_callbacks
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        window._bokeh_onload_callbacks.push(callback);
        if (window._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        window._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            window._bokeh_is_loading--;
            if (window._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("b09e7a30-4735-49e3-93eb-7db0726f3a16");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b09e7a30-4735-49e3-93eb-7db0726f3a16' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"1d7cfe4d-a1c4-4c3b-9174-e6262046b1ef":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["width","x","color","y","height","label","line_color","line_alpha","fill_alpha"],"data":{"chart_index":[{"interpreter":"pypy","sample":"1st"}],"color":["#f22c40"],"fill_alpha":[0.8],"height":[12.0],"interpreter":["pypy"],"label":[{"interpreter":"pypy","sample":"1st"}],"line_alpha":[1.0],"line_color":["#f22c40"],"sample":["1st"],"width":[0.2],"x":["pypy:0.333333333333"],"y":[6.0]}},"id":"5d182028-9109-46fd-8520-94e2ba32f0cc","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"197737aa-b577-419c-94ae-5bfc923215a5","type":"ColumnDataSource"},"glyph":{"id":"32d5be0f-34d3-4073-b21d-9018a8407388","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"3e313256-317a-42eb-af6e-2d5a1aed06d9","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"b9f08289-f915-4ffa-bef1-070281c62d93","type":"ColumnDataSource"},"glyph":{"id":"98712f32-a3ef-4837-a5a8-bc5b3e0292cb","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"790f4448-1371-40f8-94b0-84ac170c1b73","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"a28e86da-c415-4825-8e52-7d994b74a936","subtype":"Chart","type":"Plot"}},"id":"be43e769-580a-4496-8726-933640f259e9","type":"ResetTool"},{"attributes":{},"id":"668e9484-2765-478c-a072-951d5d2d0b80","type":"CategoricalTickFormatter"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"value":"#5ab738"},"line_alpha":{"field":"line_alpha"},"line_color":{"value":"#f22c40"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"height"}},"id":"87c06bc6-e1ff-4a82-91f2-c2fa93e19cac","type":"Circle"},{"attributes":{"callback":null,"column_names":["width","x","color","y","height","label","line_color","line_alpha","fill_alpha"],"data":{"chart_index":[{"interpreter":"python","sample":"1st"}],"color":["#f22c40"],"fill_alpha":[0.8],"height":[-2.0],"interpreter":["python"],"label":[{"interpreter":"python","sample":"1st"}],"line_alpha":[1.0],"line_color":["#f22c40"],"sample":["1st"],"width":[0.2],"x":["python:0.333333333333"],"y":[-1.0]}},"id":"197737aa-b577-419c-94ae-5bfc923215a5","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"value":"#f22c40"},"line_alpha":{"field":"line_alpha"},"line_color":{"value":"#f22c40"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"height"}},"id":"3b17e16e-45b3-4c89-af84-a80cb390d78d","type":"Circle"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"value":"#5ab738"},"line_alpha":{"field":"line_alpha"},"line_color":{"value":"#f22c40"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"height"}},"id":"3fbc2509-a5d2-46db-bd88-f89b11936b1c","type":"Circle"},{"attributes":{"plot":{"id":"a28e86da-c415-4825-8e52-7d994b74a936","subtype":"Chart","type":"Plot"}},"id":"3f68f543-dfc6-4aca-b71a-8f768c6741f5","type":"WheelZoomTool"},{"attributes":{"callback":null,"end":41.9,"start":-3.9000000000000004},"id":"0d30bd75-17f1-4773-9ae2-318acff90b90","type":"Range1d"},{"attributes":{"plot":{"id":"a28e86da-c415-4825-8e52-7d994b74a936","subtype":"Chart","type":"Plot"}},"id":"64d23e72-5b4d-4118-b406-e4947031d7d1","type":"PanTool"},{"attributes":{"data_source":{"id":"ae124dec-8d0c-48c7-aaea-d2e07b9cb637","type":"ColumnDataSource"},"glyph":{"id":"3fbc2509-a5d2-46db-bd88-f89b11936b1c","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"6363a486-c37e-451f-8261-d941eedc3000","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["width","x","color","y","height","label","line_color","line_alpha","fill_alpha"],"data":{"chart_index":[{"interpreter":"pypy","sample":"2nd"}],"color":["#5ab738"],"fill_alpha":[0.8],"height":[40.0],"interpreter":["pypy"],"label":[{"interpreter":"pypy","sample":"2nd"}],"line_alpha":[1.0],"line_color":["#f22c40"],"sample":["2nd"],"width":[0.2],"x":["pypy:0.666666666667"],"y":[20.0]}},"id":"b9f08289-f915-4ffa-bef1-070281c62d93","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"value":"#f22c40"},"line_alpha":{"field":"line_alpha"},"line_color":{"value":"#f22c40"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"height"}},"id":"867532e2-5d6c-461f-81b8-61752f2bbdd0","type":"Circle"},{"attributes":{"data_source":{"id":"df6e4241-55aa-4ed6-8a01-4df995f99a95","type":"ColumnDataSource"},"glyph":{"id":"867532e2-5d6c-461f-81b8-61752f2bbdd0","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"bba11d19-6b76-4355-a025-741b6ad6a56f","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"f26faf60-3983-4233-977a-119f7f577db5","type":"ColumnDataSource"},"glyph":{"id":"87c06bc6-e1ff-4a82-91f2-c2fa93e19cac","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"68152580-662e-43c1-a1ad-815c10893458","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"value":"#f22c40"},"line_alpha":{"field":"line_alpha"},"line_color":{"value":"#f22c40"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"height"}},"id":"32d5be0f-34d3-4073-b21d-9018a8407388","type":"Circle"},{"attributes":{"below":[{"id":"5c1aa6a1-b6a8-4a58-a60d-2163fbde3ff1","type":"CategoricalAxis"}],"css_classes":null,"height":400,"left":[{"id":"4e8a5b9f-7738-4c8f-aafe-337817864771","type":"LinearAxis"}],"renderers":[{"id":"29d5cf52-a13f-4f4a-b491-431000b714b6","type":"BoxAnnotation"},{"id":"3e313256-317a-42eb-af6e-2d5a1aed06d9","type":"GlyphRenderer"},{"id":"68152580-662e-43c1-a1ad-815c10893458","type":"GlyphRenderer"},{"id":"2aa6227d-f8c4-455c-a6aa-651c36511044","type":"GlyphRenderer"},{"id":"790f4448-1371-40f8-94b0-84ac170c1b73","type":"GlyphRenderer"},{"id":"bba11d19-6b76-4355-a025-741b6ad6a56f","type":"GlyphRenderer"},{"id":"6363a486-c37e-451f-8261-d941eedc3000","type":"GlyphRenderer"},{"id":"b857c6ee-65b0-4baa-94ef-8e54adb21396","type":"Legend"},{"id":"5c1aa6a1-b6a8-4a58-a60d-2163fbde3ff1","type":"CategoricalAxis"},{"id":"4e8a5b9f-7738-4c8f-aafe-337817864771","type":"LinearAxis"},{"id":"f74a0e71-c5b1-4881-a3d5-6979e8d3a14a","type":"Grid"}],"title":{"id":"cf7b7f52-3e9f-4cea-8185-94aa2801f50f","type":"Title"},"tool_events":{"id":"099fd27d-8365-4407-9805-11ff7dce3aaf","type":"ToolEvents"},"toolbar":{"id":"5a1add55-a3c6-4416-9e99-9946bb3ca215","type":"Toolbar"},"width":600,"x_mapper_type":"auto","x_range":{"id":"c73a4397-1d68-4c9c-93e3-013ef43d5c40","type":"FactorRange"},"y_mapper_type":"auto","y_range":{"id":"0d30bd75-17f1-4773-9ae2-318acff90b90","type":"Range1d"}},"id":"a28e86da-c415-4825-8e52-7d994b74a936","subtype":"Chart","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"a28e86da-c415-4825-8e52-7d994b74a936","subtype":"Chart","type":"Plot"},"ticker":{"id":"8cae5cec-8cdb-4a85-a68a-231775a4c823","type":"BasicTicker"}},"id":"f74a0e71-c5b1-4881-a3d5-6979e8d3a14a","type":"Grid"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"value":"#5ab738"},"line_alpha":{"field":"line_alpha"},"line_color":{"value":"#f22c40"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"height"}},"id":"98712f32-a3ef-4837-a5a8-bc5b3e0292cb","type":"Circle"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"64d23e72-5b4d-4118-b406-e4947031d7d1","type":"PanTool"},{"id":"3f68f543-dfc6-4aca-b71a-8f768c6741f5","type":"WheelZoomTool"},{"id":"7d90e93e-4631-4db6-adda-f6ef464c8312","type":"BoxZoomTool"},{"id":"d0b2be97-918e-4f9c-9951-fe319538cfc6","type":"SaveTool"},{"id":"be43e769-580a-4496-8726-933640f259e9","type":"ResetTool"},{"id":"73074c36-9430-4ddc-b284-18000631777b","type":"HelpTool"}]},"id":"5a1add55-a3c6-4416-9e99-9946bb3ca215","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["width","x","color","y","height","label","line_color","line_alpha","fill_alpha"],"data":{"chart_index":[{"interpreter":"jython","sample":"1st"}],"color":["#f22c40"],"fill_alpha":[0.8],"height":[22.0],"interpreter":["jython"],"label":[{"interpreter":"jython","sample":"1st"}],"line_alpha":[1.0],"line_color":["#f22c40"],"sample":["1st"],"width":[0.2],"x":["jython:0.333333333333"],"y":[11.0]}},"id":"df6e4241-55aa-4ed6-8a01-4df995f99a95","type":"ColumnDataSource"},{"attributes":{},"id":"0739eb13-3744-4299-9043-d4f2724304af","type":"CategoricalTicker"},{"attributes":{"axis_label":"Interpreter","formatter":{"id":"668e9484-2765-478c-a072-951d5d2d0b80","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"a28e86da-c415-4825-8e52-7d994b74a936","subtype":"Chart","type":"Plot"},"ticker":{"id":"0739eb13-3744-4299-9043-d4f2724304af","type":"CategoricalTicker"}},"id":"5c1aa6a1-b6a8-4a58-a60d-2163fbde3ff1","type":"CategoricalAxis"},{"attributes":{"items":[{"id":"4c2018fc-3f9e-4fb3-8281-86e00e20597e","type":"LegendItem"},{"id":"179418ac-27ec-48e6-98f8-6d7f964da1e9","type":"LegendItem"}],"plot":{"id":"a28e86da-c415-4825-8e52-7d994b74a936","subtype":"Chart","type":"Plot"}},"id":"b857c6ee-65b0-4baa-94ef-8e54adb21396","type":"Legend"},{"attributes":{"plot":{"id":"a28e86da-c415-4825-8e52-7d994b74a936","subtype":"Chart","type":"Plot"}},"id":"73074c36-9430-4ddc-b284-18000631777b","type":"HelpTool"},{"attributes":{},"id":"099fd27d-8365-4407-9805-11ff7dce3aaf","type":"ToolEvents"},{"attributes":{},"id":"f1d9f5cd-6feb-4038-9dfc-3bead12679ee","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"5d182028-9109-46fd-8520-94e2ba32f0cc","type":"ColumnDataSource"},"glyph":{"id":"3b17e16e-45b3-4c89-af84-a80cb390d78d","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"2aa6227d-f8c4-455c-a6aa-651c36511044","type":"GlyphRenderer"},{"attributes":{"label":{"value":"2nd"},"renderers":[{"id":"68152580-662e-43c1-a1ad-815c10893458","type":"GlyphRenderer"}]},"id":"179418ac-27ec-48e6-98f8-6d7f964da1e9","type":"LegendItem"},{"attributes":{"callback":null,"column_names":["width","x","color","y","height","label","line_color","line_alpha","fill_alpha"],"data":{"chart_index":[{"interpreter":"python","sample":"2nd"}],"color":["#5ab738"],"fill_alpha":[0.8],"height":[5.0],"interpreter":["python"],"label":[{"interpreter":"python","sample":"2nd"}],"line_alpha":[1.0],"line_color":["#f22c40"],"sample":["2nd"],"width":[0.2],"x":["python:0.666666666667"],"y":[2.5]}},"id":"f26faf60-3983-4233-977a-119f7f577db5","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["width","x","color","y","height","label","line_color","line_alpha","fill_alpha"],"data":{"chart_index":[{"interpreter":"jython","sample":"2nd"}],"color":["#5ab738"],"fill_alpha":[0.8],"height":[30.0],"interpreter":["jython"],"label":[{"interpreter":"jython","sample":"2nd"}],"line_alpha":[1.0],"line_color":["#f22c40"],"sample":["2nd"],"width":[0.2],"x":["jython:0.666666666667"],"y":[15.0]}},"id":"ae124dec-8d0c-48c7-aaea-d2e07b9cb637","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":"Python Interpreter Sampling"},"id":"cf7b7f52-3e9f-4cea-8185-94aa2801f50f","type":"Title"},{"attributes":{"plot":{"id":"a28e86da-c415-4825-8e52-7d994b74a936","subtype":"Chart","type":"Plot"}},"id":"d0b2be97-918e-4f9c-9951-fe319538cfc6","type":"SaveTool"},{"attributes":{"callback":null,"factors":["jython","pypy","python"]},"id":"c73a4397-1d68-4c9c-93e3-013ef43d5c40","type":"FactorRange"},{"attributes":{"axis_label":"Mean( Timing )","formatter":{"id":"f1d9f5cd-6feb-4038-9dfc-3bead12679ee","type":"BasicTickFormatter"},"plot":{"id":"a28e86da-c415-4825-8e52-7d994b74a936","subtype":"Chart","type":"Plot"},"ticker":{"id":"8cae5cec-8cdb-4a85-a68a-231775a4c823","type":"BasicTicker"}},"id":"4e8a5b9f-7738-4c8f-aafe-337817864771","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"29d5cf52-a13f-4f4a-b491-431000b714b6","type":"BoxAnnotation"},{"attributes":{"label":{"value":"1st"},"renderers":[{"id":"3e313256-317a-42eb-af6e-2d5a1aed06d9","type":"GlyphRenderer"}]},"id":"4c2018fc-3f9e-4fb3-8281-86e00e20597e","type":"LegendItem"},{"attributes":{"overlay":{"id":"29d5cf52-a13f-4f4a-b491-431000b714b6","type":"BoxAnnotation"},"plot":{"id":"a28e86da-c415-4825-8e52-7d994b74a936","subtype":"Chart","type":"Plot"}},"id":"7d90e93e-4631-4db6-adda-f6ef464c8312","type":"BoxZoomTool"},{"attributes":{},"id":"8cae5cec-8cdb-4a85-a68a-231775a4c823","type":"BasicTicker"}],"root_ids":["a28e86da-c415-4825-8e52-7d994b74a936"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"1d7cfe4d-a1c4-4c3b-9174-e6262046b1ef","elementid":"b09e7a30-4735-49e3-93eb-7db0726f3a16","modelid":"a28e86da-c415-4825-8e52-7d994b74a936"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i](window.Bokeh);
        }
        
      }
    
      if (window._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(this));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
