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
      };var element = document.getElementById("402a858b-3349-4a7f-95ad-839a1407053d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '402a858b-3349-4a7f-95ad-839a1407053d' but no matching script tag was found. ")
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
                var docs_json = {"e606550e-667b-43ce-87d1-4c9ab76c5de7":{"roots":{"references":[{"attributes":{"formatter":{"id":"22ffbf14-605e-478f-9dc4-a74006ff6348","type":"CategoricalTickFormatter"},"plot":{"id":"ea924dfa-7415-486a-89c2-4c5d9d295bc2","subtype":"Figure","type":"Plot"},"ticker":{"id":"3c23cc6d-44fb-48fb-bfeb-6241fb3218fa","type":"CategoricalTicker"}},"id":"266ef1a8-68cf-4286-9bac-d9e1c0d0e694","type":"CategoricalAxis"},{"attributes":{"callback":null,"end":100},"id":"3cb7af80-f1a5-4d68-bea3-568b3cb2a7a2","type":"Range1d"},{"attributes":{"data_source":{"id":"f05551b0-59fd-4d60-bb4d-e2e93707c748","type":"ColumnDataSource"},"glyph":{"id":"79a6fae4-a1d8-41d8-9b78-c6e249e7a946","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"146e6448-58d2-4c9d-9afc-7109a27cfe8f","type":"Segment"},"selection_glyph":null,"view":{"id":"cf394364-a23d-43d4-8f78-999df1a5888d","type":"CDSView"}},"id":"9be84177-b3dd-4de1-a958-b5a719c02f8f","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"c625b842-29c3-4ba8-9be8-f588bfd0c347","type":"LinearAxis"}],"left":[{"id":"38d15ea9-0d87-423f-acd8-053b344320ef","type":"CategoricalAxis"}],"renderers":[{"id":"c625b842-29c3-4ba8-9be8-f588bfd0c347","type":"LinearAxis"},{"id":"92da9493-944f-4e8e-a0d5-4bd9a9b3a57a","type":"Grid"},{"id":"38d15ea9-0d87-423f-acd8-053b344320ef","type":"CategoricalAxis"},{"id":"74ab3772-9a5c-49da-87c3-2ccf66a035bf","type":"Grid"},{"id":"9be84177-b3dd-4de1-a958-b5a719c02f8f","type":"GlyphRenderer"},{"id":"22e37f9b-0ed4-4c43-9fcb-00fd1ee59451","type":"GlyphRenderer"}],"sizing_mode":"scale_width","title":{"id":"47f161f5-d9a8-4e1a-afb6-26e66ede039b","type":"Title"},"toolbar":{"id":"f1cbdbc2-9043-4bae-a71d-dbd71a0d668e","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"3cb7af80-f1a5-4d68-bea3-568b3cb2a7a2","type":"Range1d"},"x_scale":{"id":"e42a9873-9050-47c3-a06f-e274778b108b","type":"LinearScale"},"y_range":{"id":"97e4c7bf-9b13-4879-8c79-f11b61884281","type":"FactorRange"},"y_scale":{"id":"52288311-d76c-4c75-a157-3dab037b19d2","type":"CategoricalScale"}},"id":"bd1fdbb5-5262-40a2-941b-5ee57de202d6","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"7ce08be3-2296-4bae-8a72-e14c660deb09","type":"BasicTickFormatter"},"plot":{"id":"bd1fdbb5-5262-40a2-941b-5ee57de202d6","subtype":"Figure","type":"Plot"},"ticker":{"id":"f86ab07b-1c86-4852-aceb-bdd00ab72a5d","type":"BasicTicker"}},"id":"c625b842-29c3-4ba8-9be8-f588bfd0c347","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"f1cbdbc2-9043-4bae-a71d-dbd71a0d668e","type":"Toolbar"},{"attributes":{},"id":"f86ab07b-1c86-4852-aceb-bdd00ab72a5d","type":"BasicTicker"},{"attributes":{},"id":"52288311-d76c-4c75-a157-3dab037b19d2","type":"CategoricalScale"},{"attributes":{"children":[{"id":"ea924dfa-7415-486a-89c2-4c5d9d295bc2","subtype":"Figure","type":"Plot"},{"id":"bd1fdbb5-5262-40a2-941b-5ee57de202d6","subtype":"Figure","type":"Plot"}],"sizing_mode":"scale_width"},"id":"afade31c-fb45-43be-8677-071ac501b45c","type":"Row"},{"attributes":{"callback":null,"factors":["foo 123","bar:0.2","baz-10"]},"id":"262cadb2-392b-4edc-aec3-1da2c8c05438","type":"FactorRange"},{"attributes":{"dimension":1,"plot":{"id":"bd1fdbb5-5262-40a2-941b-5ee57de202d6","subtype":"Figure","type":"Plot"},"ticker":{"id":"318801d7-123f-45bd-85f9-eb58af4f06f9","type":"CategoricalTicker"}},"id":"74ab3772-9a5c-49da-87c3-2ccf66a035bf","type":"Grid"},{"attributes":{"formatter":{"id":"44342159-56f9-43de-b69d-89ab221da20c","type":"CategoricalTickFormatter"},"plot":{"id":"bd1fdbb5-5262-40a2-941b-5ee57de202d6","subtype":"Figure","type":"Plot"},"ticker":{"id":"318801d7-123f-45bd-85f9-eb58af4f06f9","type":"CategoricalTicker"}},"id":"38d15ea9-0d87-423f-acd8-053b344320ef","type":"CategoricalAxis"},{"attributes":{},"id":"60a9c051-399f-4b24-8245-9462389a49a5","type":"CategoricalTickFormatter"},{"attributes":{"plot":null,"text":"Categorical Heatmap"},"id":"d9970c9f-01d1-4011-96a3-b2cf3a0d7ae2","type":"Title"},{"attributes":{},"id":"e42a9873-9050-47c3-a06f-e274778b108b","type":"LinearScale"},{"attributes":{"plot":null,"text":"Categorical Dot Plot"},"id":"47f161f5-d9a8-4e1a-afb6-26e66ede039b","type":"Title"},{"attributes":{},"id":"22ffbf14-605e-478f-9dc4-a74006ff6348","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"factors":["foo 123","bar:0.2","baz-10"]},"id":"fe3a992d-7494-49ce-826d-bce44ef54b66","type":"FactorRange"},{"attributes":{"source":{"id":"f05551b0-59fd-4d60-bb4d-e2e93707c748","type":"ColumnDataSource"}},"id":"cf394364-a23d-43d4-8f78-999df1a5888d","type":"CDSView"},{"attributes":{"fill_color":{"field":"fill_color"},"height":{"units":"data","value":1},"line_color":{"field":"line_color"},"width":{"units":"data","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"38c65474-31d1-4c9d-bd11-e4da96bf052c","type":"Rect"},{"attributes":{"dimension":1,"plot":{"id":"ea924dfa-7415-486a-89c2-4c5d9d295bc2","subtype":"Figure","type":"Plot"},"ticker":{"id":"e77eff2c-564b-44ad-9691-ad41c6c03bcf","type":"CategoricalTicker"}},"id":"40ed58c3-a2bd-470f-a8b0-279aaa0dafdb","type":"Grid"},{"attributes":{},"id":"7ce08be3-2296-4bae-8a72-e14c660deb09","type":"BasicTickFormatter"},{"attributes":{},"id":"e77eff2c-564b-44ad-9691-ad41c6c03bcf","type":"CategoricalTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"c4670b97-e50b-42df-9b2d-8ef5d539f8e0","type":"HoverTool"}]},"id":"2ece67fa-3e51-4efb-a2ad-5e4efd65d2c8","type":"Toolbar"},{"attributes":{},"id":"913b92ef-0a76-4794-9bc8-b89ec8c39f06","type":"CategoricalScale"},{"attributes":{"data_source":{"id":"c2e4a1d9-8be7-4ebc-b17e-a31bf04e0d29","type":"ColumnDataSource"},"glyph":{"id":"38c65474-31d1-4c9d-bd11-e4da96bf052c","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b9c57d55-217d-4c59-85b8-e68f0f594070","type":"Rect"},"selection_glyph":null,"view":{"id":"8f5d8ba2-218c-4f4e-81cd-588fd3b6cdd9","type":"CDSView"}},"id":"d448e3df-066e-4e80-aaa2-ffd4df5ef36e","type":"GlyphRenderer"},{"attributes":{},"id":"082dcae3-400a-424f-ae96-0f92ba096bdd","type":"CategoricalScale"},{"attributes":{},"id":"318801d7-123f-45bd-85f9-eb58af4f06f9","type":"CategoricalTicker"},{"attributes":{},"id":"3c23cc6d-44fb-48fb-bfeb-6241fb3218fa","type":"CategoricalTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"b9c57d55-217d-4c59-85b8-e68f0f594070","type":"Rect"},{"attributes":{"callback":null,"column_names":["y0","x1","y1"],"data":{"x1":[50,40,65,10,25,37,80,60],"y0":["a","b","c","d","e","f","g","h"],"y1":["a","b","c","d","e","f","g","h"]}},"id":"f05551b0-59fd-4d60-bb4d-e2e93707c748","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[50,40,65,10,25,37,80,60],"y":["a","b","c","d","e","f","g","h"]}},"id":"2fb1a860-b039-4aac-82b0-6bbd08320e6f","type":"ColumnDataSource"},{"attributes":{"source":{"id":"2fb1a860-b039-4aac-82b0-6bbd08320e6f","type":"ColumnDataSource"}},"id":"af8dd650-d89a-4c13-808d-a437f385ecf3","type":"CDSView"},{"attributes":{"callback":null,"factors":["a","b","c","d","e","f","g","h"]},"id":"97e4c7bf-9b13-4879-8c79-f11b61884281","type":"FactorRange"},{"attributes":{"source":{"id":"c2e4a1d9-8be7-4ebc-b17e-a31bf04e0d29","type":"ColumnDataSource"}},"id":"8f5d8ba2-218c-4f4e-81cd-588fd3b6cdd9","type":"CDSView"},{"attributes":{"formatter":{"id":"60a9c051-399f-4b24-8245-9462389a49a5","type":"CategoricalTickFormatter"},"plot":{"id":"ea924dfa-7415-486a-89c2-4c5d9d295bc2","subtype":"Figure","type":"Plot"},"ticker":{"id":"e77eff2c-564b-44ad-9691-ad41c6c03bcf","type":"CategoricalTicker"}},"id":"656047b8-45d1-41fc-963d-88180ffa38cc","type":"CategoricalAxis"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"green"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"dd3eb2db-e4d4-4de5-bc93-951bc3456c3d","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y","fill_color","line_color"],"data":{"fill_color":["#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B"],"line_color":["#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B"],"x":["foo 123","foo 123","foo 123","bar:0.2","bar:0.2","bar:0.2","baz-10","baz-10","baz-10"],"y":["foo 123","bar:0.2","baz-10","foo 123","bar:0.2","baz-10","foo 123","bar:0.2","baz-10"]}},"id":"c2e4a1d9-8be7-4ebc-b17e-a31bf04e0d29","type":"ColumnDataSource"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x0":{"value":0},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"146e6448-58d2-4c9d-9afc-7109a27cfe8f","type":"Segment"},{"attributes":{},"id":"44342159-56f9-43de-b69d-89ab221da20c","type":"CategoricalTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"71b01edb-785c-46bc-b45b-5374c3410da8","type":"Circle"},{"attributes":{"below":[{"id":"266ef1a8-68cf-4286-9bac-d9e1c0d0e694","type":"CategoricalAxis"}],"left":[{"id":"656047b8-45d1-41fc-963d-88180ffa38cc","type":"CategoricalAxis"}],"renderers":[{"id":"266ef1a8-68cf-4286-9bac-d9e1c0d0e694","type":"CategoricalAxis"},{"id":"bafdc64f-65e3-4d80-9a75-3b21796973de","type":"Grid"},{"id":"656047b8-45d1-41fc-963d-88180ffa38cc","type":"CategoricalAxis"},{"id":"40ed58c3-a2bd-470f-a8b0-279aaa0dafdb","type":"Grid"},{"id":"d448e3df-066e-4e80-aaa2-ffd4df5ef36e","type":"GlyphRenderer"}],"sizing_mode":"scale_width","title":{"id":"d9970c9f-01d1-4011-96a3-b2cf3a0d7ae2","type":"Title"},"toolbar":{"id":"2ece67fa-3e51-4efb-a2ad-5e4efd65d2c8","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"fe3a992d-7494-49ce-826d-bce44ef54b66","type":"FactorRange"},"x_scale":{"id":"913b92ef-0a76-4794-9bc8-b89ec8c39f06","type":"CategoricalScale"},"y_range":{"id":"262cadb2-392b-4edc-aec3-1da2c8c05438","type":"FactorRange"},"y_scale":{"id":"082dcae3-400a-424f-ae96-0f92ba096bdd","type":"CategoricalScale"}},"id":"ea924dfa-7415-486a-89c2-4c5d9d295bc2","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"bd1fdbb5-5262-40a2-941b-5ee57de202d6","subtype":"Figure","type":"Plot"},"ticker":{"id":"f86ab07b-1c86-4852-aceb-bdd00ab72a5d","type":"BasicTicker"}},"id":"92da9493-944f-4e8e-a0d5-4bd9a9b3a57a","type":"Grid"},{"attributes":{"data_source":{"id":"2fb1a860-b039-4aac-82b0-6bbd08320e6f","type":"ColumnDataSource"},"glyph":{"id":"dd3eb2db-e4d4-4de5-bc93-951bc3456c3d","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"71b01edb-785c-46bc-b45b-5374c3410da8","type":"Circle"},"selection_glyph":null,"view":{"id":"af8dd650-d89a-4c13-808d-a437f385ecf3","type":"CDSView"}},"id":"22e37f9b-0ed4-4c43-9fcb-00fd1ee59451","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"ea924dfa-7415-486a-89c2-4c5d9d295bc2","subtype":"Figure","type":"Plot"},"ticker":{"id":"3c23cc6d-44fb-48fb-bfeb-6241fb3218fa","type":"CategoricalTicker"}},"id":"bafdc64f-65e3-4d80-9a75-3b21796973de","type":"Grid"},{"attributes":{"line_color":{"value":"green"},"line_width":{"value":2},"x0":{"value":0},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"79a6fae4-a1d8-41d8-9b78-c6e249e7a946","type":"Segment"},{"attributes":{"callback":null},"id":"c4670b97-e50b-42df-9b2d-8ef5d539f8e0","type":"HoverTool"}],"root_ids":["afade31c-fb45-43be-8677-071ac501b45c"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"e606550e-667b-43ce-87d1-4c9ab76c5de7","elementid":"402a858b-3349-4a7f-95ad-839a1407053d","modelid":"afade31c-fb45-43be-8677-071ac501b45c"}];
                
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
