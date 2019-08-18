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
      };var element = document.getElementById("a2dcba5b-7d06-4257-aaa3-3694063ab40c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a2dcba5b-7d06-4257-aaa3-3694063ab40c' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.js"];
    
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
                var docs_json = {"9e4a1cc5-1696-46b3-83d0-4ecc9cac3647":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["width","line_color","color","height","x","y","label","line_alpha","fill_alpha"],"data":{"chart_index":["(111.000000, 154.000000]"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[89.0],"label":["(111.000000, 154.000000]"],"line_alpha":[1.0],"line_color":["black"],"width":[43.0],"x":["132.5"],"y":[44.5]}},"id":"5e8a541d-c712-4e9c-8b8a-b850b75adf28","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["width","line_color","color","height","x","y","label","line_alpha","fill_alpha"],"data":{"chart_index":["(197.000000, 240.000000]"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[44.0],"label":["(197.000000, 240.000000]"],"line_alpha":[1.0],"line_color":["black"],"width":[43.0],"x":["218.5"],"y":[22.0]}},"id":"51479cc8-0b73-4398-a5d3-6b6ad680768e","type":"ColumnDataSource"},{"attributes":{},"id":"b603bffb-ceeb-4372-af4d-2e6670fdf86f","type":"BasicTicker"},{"attributes":{"plot":{"id":"96bc50d9-554a-499b-bc19-6c34551bcfab","subtype":"Chart","type":"Plot"}},"id":"10da30d3-49d8-4724-95a7-7354462108d6","type":"HelpTool"},{"attributes":{"plot":null,"text":"DISPL Distribution"},"id":"7f63b638-81f1-46e3-9453-934eefa15cfb","type":"Title"},{"attributes":{"data_source":{"id":"50e42053-e22c-42af-8c30-05281af82337","type":"ColumnDataSource"},"glyph":{"id":"90e4af4c-5a03-457c-8448-c6ce894eb04e","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"2e7955d9-2c77-481d-8fa9-f4db35e19419","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["width","line_color","color","height","x","y","label","line_alpha","fill_alpha"],"data":{"chart_index":["(240.000000, 283.000000]"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[28.0],"label":["(240.000000, 283.000000]"],"line_alpha":[1.0],"line_color":["black"],"width":[43.0],"x":["261.5"],"y":[14.0]}},"id":"7e483bf6-f6ed-4868-9a93-95f00dfa4643","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"e66acb80-05b0-4293-9cc1-1bb69530e044","type":"PanTool"},{"id":"2d3f69bb-253b-4327-bc32-e72e9660e833","type":"WheelZoomTool"},{"id":"c123c59c-072a-4a50-b83a-68b61d6afc91","type":"BoxZoomTool"},{"id":"8ef0fcb0-bd1c-4553-8fcd-32ad2ce88bc9","type":"SaveTool"},{"id":"b82f8bd6-efd6-4944-9ce3-1c29d7b5ce5b","type":"ResetTool"},{"id":"10da30d3-49d8-4724-95a7-7354462108d6","type":"HelpTool"}]},"id":"597722cf-a340-4901-ab24-5e195a0096e4","type":"Toolbar"},{"attributes":{},"id":"dd02e175-c1c5-42b7-be90-2088f84525cd","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"7e483bf6-f6ed-4868-9a93-95f00dfa4643","type":"ColumnDataSource"},"glyph":{"id":"25f1faa7-d724-45aa-bc1c-2fec7861b3fb","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"b3becafa-0acd-4353-9912-5e4cd714a118","type":"GlyphRenderer"},{"attributes":{},"id":"89fd6b1b-7073-4dad-b3e9-8e86f36f3a3a","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"a2a26ae2-8d1d-4d2e-962a-ea07c588a51a","type":"Rect"},{"attributes":{"callback":null,"end":126.50000000000001},"id":"be272029-eb68-4ace-b2d9-b4104c2dcabd","type":"Range1d"},{"attributes":{"plot":{"id":"96bc50d9-554a-499b-bc19-6c34551bcfab","subtype":"Chart","type":"Plot"}},"id":"2d3f69bb-253b-4327-bc32-e72e9660e833","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"25f1faa7-d724-45aa-bc1c-2fec7861b3fb","type":"Rect"},{"attributes":{"plot":{"id":"96bc50d9-554a-499b-bc19-6c34551bcfab","subtype":"Chart","type":"Plot"}},"id":"b82f8bd6-efd6-4944-9ce3-1c29d7b5ce5b","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["width","line_color","color","height","x","y","label","line_alpha","fill_alpha"],"data":{"chart_index":["(154.000000, 197.000000]"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[18.0],"label":["(154.000000, 197.000000]"],"line_alpha":[1.0],"line_color":["black"],"width":[43.0],"x":["175.5"],"y":[9.0]}},"id":"0ee081cc-899b-45fc-a57a-31c76e2f5921","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"dc5d3fb6-dcb3-4194-b88c-9a648ba5d65d","type":"Rect"},{"attributes":{"callback":null,"column_names":["width","line_color","color","height","x","y","label","line_alpha","fill_alpha"],"data":{"chart_index":["(369.000000, 412.000000]"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[16.0],"label":["(369.000000, 412.000000]"],"line_alpha":[1.0],"line_color":["black"],"width":[43.0],"x":["390.5"],"y":[8.0]}},"id":"3edfcc1d-6573-4ad4-af11-bb32c8c3f226","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["width","line_color","color","height","x","y","label","line_alpha","fill_alpha"],"data":{"chart_index":["[68.000000, 111.000000]"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[115.0],"label":["[68.000000, 111.000000]"],"line_alpha":[1.0],"line_color":["black"],"width":[43.0],"x":["89.5"],"y":[57.5]}},"id":"02690aec-1fd5-4751-a3f3-0cd26550dd21","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"e94513f8-acc4-4e60-beee-594a917e1df9","type":"LinearAxis"}],"css_classes":null,"left":[{"id":"f8e852bc-a98e-481e-8c0f-a8c6c4ee3fd5","type":"LinearAxis"}],"renderers":[{"id":"fecaaf58-0e06-4a91-86bb-bda43822f34b","type":"BoxAnnotation"},{"id":"5e566f02-0be3-45fc-82d4-db99eaf35666","type":"GlyphRenderer"},{"id":"e454a747-f3b0-4ed2-8187-7d15e34b881a","type":"GlyphRenderer"},{"id":"6dd71789-a82f-470d-9602-91b82ab82106","type":"GlyphRenderer"},{"id":"1a5010b0-5384-4086-99e3-56769b97c578","type":"GlyphRenderer"},{"id":"b3becafa-0acd-4353-9912-5e4cd714a118","type":"GlyphRenderer"},{"id":"5d04034a-ffc1-4db8-a2ca-b16ebb9cd6f2","type":"GlyphRenderer"},{"id":"2e7955d9-2c77-481d-8fa9-f4db35e19419","type":"GlyphRenderer"},{"id":"20b28662-d49a-460c-85be-7d8606a53c51","type":"GlyphRenderer"},{"id":"8e734d35-4f2a-4fa1-815e-aea73e228ad2","type":"GlyphRenderer"},{"id":"1b64dd4e-2f22-4c2f-8e36-e84ecbd94e76","type":"Legend"},{"id":"e94513f8-acc4-4e60-beee-594a917e1df9","type":"LinearAxis"},{"id":"f8e852bc-a98e-481e-8c0f-a8c6c4ee3fd5","type":"LinearAxis"},{"id":"f6f538f2-a87f-4b3b-9ee6-717b09b46fcb","type":"Grid"}],"title":{"id":"7f63b638-81f1-46e3-9453-934eefa15cfb","type":"Title"},"tool_events":{"id":"60ce20bd-6186-481a-b37b-399e5d38914a","type":"ToolEvents"},"toolbar":{"id":"597722cf-a340-4901-ab24-5e195a0096e4","type":"Toolbar"},"x_mapper_type":"auto","x_range":{"id":"342ff6da-b01d-4e67-8770-6d5700e9801b","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"be272029-eb68-4ace-b2d9-b4104c2dcabd","type":"Range1d"}},"id":"96bc50d9-554a-499b-bc19-6c34551bcfab","subtype":"Chart","type":"Plot"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"90e4af4c-5a03-457c-8448-c6ce894eb04e","type":"Rect"},{"attributes":{"callback":null,"column_names":["width","line_color","color","height","x","y","label","line_alpha","fill_alpha"],"data":{"chart_index":["(326.000000, 369.000000]"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[31.0],"label":["(326.000000, 369.000000]"],"line_alpha":[1.0],"line_color":["black"],"width":[43.0],"x":["347.5"],"y":[15.5]}},"id":"50e42053-e22c-42af-8c30-05281af82337","type":"ColumnDataSource"},{"attributes":{"axis_label":"Count( Displ )","formatter":{"id":"dd02e175-c1c5-42b7-be90-2088f84525cd","type":"BasicTickFormatter"},"plot":{"id":"96bc50d9-554a-499b-bc19-6c34551bcfab","subtype":"Chart","type":"Plot"},"ticker":{"id":"b603bffb-ceeb-4372-af4d-2e6670fdf86f","type":"BasicTicker"}},"id":"f8e852bc-a98e-481e-8c0f-a8c6c4ee3fd5","type":"LinearAxis"},{"attributes":{"data_source":{"id":"66a5e572-1bc2-42d7-a165-e726a4ec180e","type":"ColumnDataSource"},"glyph":{"id":"3c6a3d27-e144-4564-8543-0f8b2d0e4bb9","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"8e734d35-4f2a-4fa1-815e-aea73e228ad2","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"7088dc32-d515-4a7c-ac2b-16ff121fbdc9","type":"ColumnDataSource"},"glyph":{"id":"be0b4b7a-4ce0-4971-adae-01e2cbc5558c","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"5d04034a-ffc1-4db8-a2ca-b16ebb9cd6f2","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"dca38e71-d59b-4958-a884-bd32ed1acd4a","type":"Rect"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3c6a3d27-e144-4564-8543-0f8b2d0e4bb9","type":"Rect"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"446facf4-c8b7-47c3-9098-ebce77fe654a","type":"Rect"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"310026f7-a019-49c4-9474-6345acd7cc86","type":"Rect"},{"attributes":{"axis_label":"displ","formatter":{"id":"89fd6b1b-7073-4dad-b3e9-8e86f36f3a3a","type":"BasicTickFormatter"},"plot":{"id":"96bc50d9-554a-499b-bc19-6c34551bcfab","subtype":"Chart","type":"Plot"},"ticker":{"id":"118cac56-6490-4171-94f9-dce7d75da091","type":"BasicTicker"}},"id":"e94513f8-acc4-4e60-beee-594a917e1df9","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["width","line_color","color","height","x","y","label","line_alpha","fill_alpha"],"data":{"chart_index":["(412.000000, 455.000000]"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[9.0],"label":["(412.000000, 455.000000]"],"line_alpha":[1.0],"line_color":["black"],"width":[43.0],"x":["433.5"],"y":[4.5]}},"id":"66a5e572-1bc2-42d7-a165-e726a4ec180e","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["width","line_color","color","height","x","y","label","line_alpha","fill_alpha"],"data":{"chart_index":["(283.000000, 326.000000]"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[42.0],"label":["(283.000000, 326.000000]"],"line_alpha":[1.0],"line_color":["black"],"width":[43.0],"x":["304.5"],"y":[21.0]}},"id":"7088dc32-d515-4a7c-ac2b-16ff121fbdc9","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"96bc50d9-554a-499b-bc19-6c34551bcfab","subtype":"Chart","type":"Plot"},"ticker":{"id":"b603bffb-ceeb-4372-af4d-2e6670fdf86f","type":"BasicTicker"}},"id":"f6f538f2-a87f-4b3b-9ee6-717b09b46fcb","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"fecaaf58-0e06-4a91-86bb-bda43822f34b","type":"BoxAnnotation"},{"attributes":{"location":"top_left","plot":{"id":"96bc50d9-554a-499b-bc19-6c34551bcfab","subtype":"Chart","type":"Plot"}},"id":"1b64dd4e-2f22-4c2f-8e36-e84ecbd94e76","type":"Legend"},{"attributes":{"callback":null,"end":468.075,"start":54.925},"id":"342ff6da-b01d-4e67-8770-6d5700e9801b","type":"Range1d"},{"attributes":{"plot":{"id":"96bc50d9-554a-499b-bc19-6c34551bcfab","subtype":"Chart","type":"Plot"}},"id":"8ef0fcb0-bd1c-4553-8fcd-32ad2ce88bc9","type":"SaveTool"},{"attributes":{"data_source":{"id":"3edfcc1d-6573-4ad4-af11-bb32c8c3f226","type":"ColumnDataSource"},"glyph":{"id":"446facf4-c8b7-47c3-9098-ebce77fe654a","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"20b28662-d49a-460c-85be-7d8606a53c51","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"5e8a541d-c712-4e9c-8b8a-b850b75adf28","type":"ColumnDataSource"},"glyph":{"id":"310026f7-a019-49c4-9474-6345acd7cc86","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"e454a747-f3b0-4ed2-8187-7d15e34b881a","type":"GlyphRenderer"},{"attributes":{},"id":"118cac56-6490-4171-94f9-dce7d75da091","type":"BasicTicker"},{"attributes":{"data_source":{"id":"0ee081cc-899b-45fc-a57a-31c76e2f5921","type":"ColumnDataSource"},"glyph":{"id":"a2a26ae2-8d1d-4d2e-962a-ea07c588a51a","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"6dd71789-a82f-470d-9602-91b82ab82106","type":"GlyphRenderer"},{"attributes":{},"id":"60ce20bd-6186-481a-b37b-399e5d38914a","type":"ToolEvents"},{"attributes":{"data_source":{"id":"51479cc8-0b73-4398-a5d3-6b6ad680768e","type":"ColumnDataSource"},"glyph":{"id":"dca38e71-d59b-4958-a884-bd32ed1acd4a","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"1a5010b0-5384-4086-99e3-56769b97c578","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"02690aec-1fd5-4751-a3f3-0cd26550dd21","type":"ColumnDataSource"},"glyph":{"id":"dc5d3fb6-dcb3-4194-b88c-9a648ba5d65d","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"5e566f02-0be3-45fc-82d4-db99eaf35666","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"be0b4b7a-4ce0-4971-adae-01e2cbc5558c","type":"Rect"},{"attributes":{"plot":{"id":"96bc50d9-554a-499b-bc19-6c34551bcfab","subtype":"Chart","type":"Plot"}},"id":"e66acb80-05b0-4293-9cc1-1bb69530e044","type":"PanTool"},{"attributes":{"overlay":{"id":"fecaaf58-0e06-4a91-86bb-bda43822f34b","type":"BoxAnnotation"},"plot":{"id":"96bc50d9-554a-499b-bc19-6c34551bcfab","subtype":"Chart","type":"Plot"}},"id":"c123c59c-072a-4a50-b83a-68b61d6afc91","type":"BoxZoomTool"}],"root_ids":["96bc50d9-554a-499b-bc19-6c34551bcfab"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"9e4a1cc5-1696-46b3-83d0-4ecc9cac3647","elementid":"a2dcba5b-7d06-4257-aaa3-3694063ab40c","modelid":"96bc50d9-554a-499b-bc19-6c34551bcfab"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
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
