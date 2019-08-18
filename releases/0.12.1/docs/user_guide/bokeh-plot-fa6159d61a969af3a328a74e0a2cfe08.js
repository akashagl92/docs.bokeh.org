document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = "";
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force !== "") {
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
      };var element = document.getElementById("62f3a52c-b116-4ac1-89c8-811512b3a0b6");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '62f3a52c-b116-4ac1-89c8-811512b3a0b6' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"253d4605-89ed-4c71-babc-99b6d6991108":{"roots":{"references":[{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"e97da297-67ba-441b-bb21-fc063751e427","type":"Rect"},{"attributes":{"data_source":{"id":"f39673d3-aaf1-4ca4-9405-248749882100","type":"ColumnDataSource"},"glyph":{"id":"9edf06c6-ac69-4211-99d6-042fe50b0e25","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"6ad2ec77-c874-4f6d-a40a-33e9f6e71b93","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"ba206332-4e3a-4271-97d2-745dcd220dc1","type":"ColumnDataSource"},"glyph":{"id":"60e16602-44a4-4cb1-93e5-d7d9b1f6b259","type":"Segment"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"ab7ff62d-663f-4cb3-a309-7ade3b556c6c","type":"GlyphRenderer"},{"attributes":{},"id":"c7fc006b-9f34-477a-b488-826a83513a02","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":4}],"color":["DimGrey"],"cyl":[4],"fill_alpha":[0.8],"height":[3.3999999999999986],"label":[{"cyl":4}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["4"],"y":[26.7]}},"id":"877d3d7b-890f-4cee-b98f-1d41dc3eace7","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":"MPG Summary (grouped by CYL)"},"id":"da89006c-1962-4ca5-8528-c7059b639413","type":"Title"},{"attributes":{"axis_label":"Mpg","formatter":{"id":"c7fc006b-9f34-477a-b488-826a83513a02","type":"BasicTickFormatter"},"plot":{"id":"cb6ecc17-5278-40fe-81e9-4099ec80d448","subtype":"Chart","type":"Plot"},"ticker":{"id":"1a806f97-e1df-43a6-81ef-35fb0ce2648f","type":"BasicTicker"}},"id":"b4f2cf84-75aa-4d09-9d6e-a9ec494daf0d","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":5},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"93a95d4d-2acf-4465-9371-7a75d7f64c58","type":"Circle"},{"attributes":{},"id":"40d87b4d-4052-4a52-8fcb-844b8cfbe9e3","type":"ToolEvents"},{"attributes":{},"id":"6398693f-dc33-4cd5-b59f-5426d0ce0580","type":"CategoricalTickFormatter"},{"attributes":{"overlay":{"id":"7c719506-36de-4554-8b2a-67712c1f8e26","type":"BoxAnnotation"},"plot":{"id":"cb6ecc17-5278-40fe-81e9-4099ec80d448","subtype":"Chart","type":"Plot"}},"id":"25f4336a-87f7-4b32-84e9-8b12b7c276e0","type":"BoxZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"cb6ecc17-5278-40fe-81e9-4099ec80d448","subtype":"Chart","type":"Plot"},"ticker":{"id":"1a806f97-e1df-43a6-81ef-35fb0ce2648f","type":"BasicTicker"}},"id":"d0213e66-0921-4834-9157-15271c43293b","type":"Grid"},{"attributes":{"callback":null,"column_names":["x0s","y0s","x1s","y1s"],"data":{"chart_index":[{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8}],"cyl":[8,8,8,8],"x0s":["8:0.5","8:0.65","8:0.5","8:0.65"],"x1s":["8:0.5","8:0.35","8:0.5","8:0.35"],"y0s":[9.0,9.0,16.0,20.5],"y1s":[13.0,9.0,20.5,20.5]}},"id":"a9ad3dde-a074-4d9f-9bf2-9260539e3c13","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"cyl":4}],"cyl":[4],"x_values":["4:0.5"],"y_values":[46.6]}},"id":"924168df-d45a-4ad7-a2a6-38a24b473b11","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"b3d90788-73fb-4dc8-9d71-739057445596","type":"ColumnDataSource"},"glyph":{"id":"332e83bf-badc-4ddb-b4f4-5b9ba81ade9b","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"31a1bb4f-ae4d-40ec-834f-985c4d9d2467","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"9edf06c6-ac69-4211-99d6-042fe50b0e25","type":"Rect"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":4}],"color":["DimGrey"],"cyl":[4],"fill_alpha":[0.8],"height":[4.550000000000004],"label":[{"cyl":4}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["4"],"y":[30.675]}},"id":"af1b661a-1482-4f28-a386-fd3794dd780d","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":8}],"color":["DimGrey"],"cyl":[8],"fill_alpha":[0.8],"height":[1.0],"label":[{"cyl":8}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["8"],"y":[13.5]}},"id":"60efd942-2b65-493a-8c77-9fe1928b0b16","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"cyl":8},{"cyl":8},{"cyl":8}],"cyl":[8,8,8],"x_values":["8:0.5","8:0.5","8:0.5"],"y_values":[26.6,23.0,23.9]}},"id":"ea85b0d7-eadd-41d3-b1da-a0d2e2b61877","type":"ColumnDataSource"},{"attributes":{"line_width":{"value":2},"x0":{"field":"x0s"},"x1":{"field":"x1s"},"y0":{"field":"y0s"},"y1":{"field":"y1s"}},"id":"4d11b279-c81c-4ce2-942f-01cacf4a9e4e","type":"Segment"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"7c719506-36de-4554-8b2a-67712c1f8e26","type":"BoxAnnotation"},{"attributes":{"line_width":{"value":2},"x0":{"field":"x0s"},"x1":{"field":"x1s"},"y0":{"field":"y0s"},"y1":{"field":"y1s"}},"id":"dad8b8bd-b2d4-4712-b46e-6b893586398a","type":"Segment"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":5},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"291547fd-2941-4ecd-8975-0db18839237f","type":"Circle"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":8}],"color":["DimGrey"],"cyl":[8],"fill_alpha":[0.8],"height":[2.0],"label":[{"cyl":8}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["8"],"y":[15.0]}},"id":"5cf22455-8f57-4967-9832-b5cb9a642a5f","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":3}],"color":["DimGrey"],"cyl":[3],"fill_alpha":[0.8],"height":[1.8000000000000007],"label":[{"cyl":3}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["3"],"y":[21.15]}},"id":"df2c48c5-837e-415f-9a51-bb883f9fe258","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x0s","y0s","x1s","y1s"],"data":{"chart_index":[{"cyl":5},{"cyl":5},{"cyl":5},{"cyl":5}],"cyl":[5,5,5,5],"x0s":["5:0.5","5:0.65","5:0.5","5:0.65"],"x1s":["5:0.5","5:0.35","5:0.5","5:0.35"],"y0s":[20.3,20.3,30.9,36.4],"y1s":[22.85,20.3,36.4,36.4]}},"id":"ba206332-4e3a-4271-97d2-745dcd220dc1","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":5}],"color":["DimGrey"],"cyl":[5],"fill_alpha":[0.8],"height":[2.549999999999997],"label":[{"cyl":5}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["5"],"y":[24.125]}},"id":"9f179cf8-b5fa-4f96-a7a9-86d1d721585e","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"e85896a7-8e5b-4e59-86ce-70974545718c","type":"Rect"},{"attributes":{"callback":null,"factors":["3","4","5","6","8"]},"id":"3f6a3011-f97f-4d9e-9bd4-c0f6f1e340bd","type":"FactorRange"},{"attributes":{"data_source":{"id":"60efd942-2b65-493a-8c77-9fe1928b0b16","type":"ColumnDataSource"},"glyph":{"id":"e97da297-67ba-441b-bb21-fc063751e427","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c0f584e6-dd30-49c3-a83f-9d8a168100da","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"cb6ecc17-5278-40fe-81e9-4099ec80d448","subtype":"Chart","type":"Plot"}},"id":"67b962a7-b793-4771-b208-ce5ab6919737","type":"HelpTool"},{"attributes":{"data_source":{"id":"ea85b0d7-eadd-41d3-b1da-a0d2e2b61877","type":"ColumnDataSource"},"glyph":{"id":"291547fd-2941-4ecd-8975-0db18839237f","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"3d5055b3-eae7-4cbb-bb89-2ced7c6fe266","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"4ccc7bcb-8294-4d30-bab8-f19a75f103fc","type":"PanTool"},{"id":"726a8ad1-0e0b-4d99-a4dd-b26515969a51","type":"WheelZoomTool"},{"id":"25f4336a-87f7-4b32-84e9-8b12b7c276e0","type":"BoxZoomTool"},{"id":"25b16c6c-d7ab-4ec9-9122-5144fd188c54","type":"SaveTool"},{"id":"941f0808-3c11-4177-80d4-3af0c340ecda","type":"ResetTool"},{"id":"67b962a7-b793-4771-b208-ce5ab6919737","type":"HelpTool"}]},"id":"dbef89da-328e-4d49-9881-f479af787939","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":5}],"color":["DimGrey"],"cyl":[5],"fill_alpha":[0.8],"height":[5.5],"label":[{"cyl":5}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["5"],"y":[28.15]}},"id":"82662d0b-9479-4208-ba30-a8743d5f1533","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"877d3d7b-890f-4cee-b98f-1d41dc3eace7","type":"ColumnDataSource"},"glyph":{"id":"4de5f1de-f621-422f-af20-b86a52b1cd5b","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"6f4ade22-32fb-4d64-852c-8517aa786359","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":6}],"color":["DimGrey"],"cyl":[6],"fill_alpha":[0.8],"height":[2.0],"label":[{"cyl":6}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["6"],"y":[20.0]}},"id":"b3d90788-73fb-4dc8-9d71-739057445596","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":6}],"color":["DimGrey"],"cyl":[6],"fill_alpha":[0.8],"height":[1.0],"label":[{"cyl":6}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["6"],"y":[18.5]}},"id":"1b7993ed-84ce-40d7-874f-b1f5799f08fa","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"9f179cf8-b5fa-4f96-a7a9-86d1d721585e","type":"ColumnDataSource"},"glyph":{"id":"3aa91f25-4b30-4a02-a636-2f57aed811e1","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d8ded51f-63ff-4416-99ea-2dfb59da7ecb","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x0s","y0s","x1s","y1s"],"data":{"chart_index":[{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6}],"cyl":[6,6,6,6],"x0s":["6:0.5","6:0.65","6:0.5","6:0.65"],"x1s":["6:0.5","6:0.35","6:0.5","6:0.35"],"y0s":[15.0,15.0,21.0,25.5],"y1s":[18.0,15.0,25.5,25.5]}},"id":"abcee485-0bde-475f-ac6e-df1e0c93bbe5","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"92e73d69-227b-4f8d-8472-94dad249921a","type":"ColumnDataSource"},"glyph":{"id":"2eff531c-fd2f-4b20-99d3-312545b526d8","type":"Segment"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"69e1193f-0342-47e6-963a-0e081ad11bc5","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3aa91f25-4b30-4a02-a636-2f57aed811e1","type":"Rect"},{"attributes":{"callback":null,"column_names":["x0s","y0s","x1s","y1s"],"data":{"chart_index":[{"cyl":3},{"cyl":3},{"cyl":3},{"cyl":3}],"cyl":[3,3,3,3],"x0s":["3:0.5","3:0.65","3:0.5","3:0.65"],"x1s":["3:0.5","3:0.35","3:0.5","3:0.35"],"y0s":[18.0,18.0,22.05,23.7],"y1s":[18.75,18.0,23.7,23.7]}},"id":"ccde506d-c0cf-4187-a34a-11a453bc1864","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"cb6ecc17-5278-40fe-81e9-4099ec80d448","subtype":"Chart","type":"Plot"}},"id":"4ccc7bcb-8294-4d30-bab8-f19a75f103fc","type":"PanTool"},{"attributes":{"data_source":{"id":"ccde506d-c0cf-4187-a34a-11a453bc1864","type":"ColumnDataSource"},"glyph":{"id":"4d11b279-c81c-4ce2-942f-01cacf4a9e4e","type":"Segment"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"9526aae6-f67e-4d73-899d-518d8715e6b7","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":49.38},"id":"f435c5b0-3860-441c-a404-087ec4c57a85","type":"Range1d"},{"attributes":{"data_source":{"id":"df2c48c5-837e-415f-9a51-bb883f9fe258","type":"ColumnDataSource"},"glyph":{"id":"e85896a7-8e5b-4e59-86ce-70974545718c","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"027581f4-497c-4134-b6ff-4ca8d9c516f7","type":"GlyphRenderer"},{"attributes":{"legends":[["3",[{"id":"6ad2ec77-c874-4f6d-a40a-33e9f6e71b93","type":"GlyphRenderer"},{"id":"027581f4-497c-4134-b6ff-4ca8d9c516f7","type":"GlyphRenderer"},{"id":"9526aae6-f67e-4d73-899d-518d8715e6b7","type":"GlyphRenderer"}]],["4",[{"id":"6f4ade22-32fb-4d64-852c-8517aa786359","type":"GlyphRenderer"},{"id":"7f2fdc37-dfa5-4bf7-90ac-0ea2ca83b3b4","type":"GlyphRenderer"},{"id":"64501fcf-7af8-48b6-8cb4-7cae2525fa6e","type":"GlyphRenderer"},{"id":"69e1193f-0342-47e6-963a-0e081ad11bc5","type":"GlyphRenderer"}]],["5",[{"id":"d8ded51f-63ff-4416-99ea-2dfb59da7ecb","type":"GlyphRenderer"},{"id":"7cd72961-db78-41d0-9657-16f00c65d64e","type":"GlyphRenderer"},{"id":"ab7ff62d-663f-4cb3-a309-7ade3b556c6c","type":"GlyphRenderer"}]],["6",[{"id":"c38d36e2-b839-4cc3-814b-e359c4c48198","type":"GlyphRenderer"},{"id":"31a1bb4f-ae4d-40ec-834f-985c4d9d2467","type":"GlyphRenderer"},{"id":"ff7d6a8f-fee8-4332-975e-ca12f36c70f9","type":"GlyphRenderer"},{"id":"4d8e5d51-f8a7-4106-8af8-821fd2e0dd5a","type":"GlyphRenderer"}]],["8",[{"id":"c0f584e6-dd30-49c3-a83f-9d8a168100da","type":"GlyphRenderer"},{"id":"5b5e546f-319d-4659-b76e-f11544f68aa0","type":"GlyphRenderer"},{"id":"3d5055b3-eae7-4cbb-bb89-2ced7c6fe266","type":"GlyphRenderer"},{"id":"a4017354-8dc9-4bed-8991-767f824333be","type":"GlyphRenderer"}]]],"location":"top_left","plot":{"id":"cb6ecc17-5278-40fe-81e9-4099ec80d448","subtype":"Chart","type":"Plot"}},"id":"e8e1ed17-5c8e-4a33-8738-9a6c03a86503","type":"Legend"},{"attributes":{"data_source":{"id":"5cf22455-8f57-4967-9832-b5cb9a642a5f","type":"ColumnDataSource"},"glyph":{"id":"3971f040-a009-4b0a-82b7-30a0c5022ca1","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"5b5e546f-319d-4659-b76e-f11544f68aa0","type":"GlyphRenderer"},{"attributes":{"axis_label":"Cyl","formatter":{"id":"6398693f-dc33-4cd5-b59f-5426d0ce0580","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"cb6ecc17-5278-40fe-81e9-4099ec80d448","subtype":"Chart","type":"Plot"},"ticker":{"id":"a7b59984-d3ff-4513-880a-d9a5438b330b","type":"CategoricalTicker"}},"id":"8701ac98-c5fe-43d9-a7c1-dbda3163a184","type":"CategoricalAxis"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3971f040-a009-4b0a-82b7-30a0c5022ca1","type":"Rect"},{"attributes":{"data_source":{"id":"82662d0b-9479-4208-ba30-a8743d5f1533","type":"ColumnDataSource"},"glyph":{"id":"1d4bc29c-0dc2-4035-b7a7-600d12c6a6d3","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"7cd72961-db78-41d0-9657-16f00c65d64e","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"a9ad3dde-a074-4d9f-9bf2-9260539e3c13","type":"ColumnDataSource"},"glyph":{"id":"51eb1057-9e79-44a0-83ee-bd0883d82478","type":"Segment"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"a4017354-8dc9-4bed-8991-767f824333be","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"abcee485-0bde-475f-ac6e-df1e0c93bbe5","type":"ColumnDataSource"},"glyph":{"id":"dad8b8bd-b2d4-4712-b46e-6b893586398a","type":"Segment"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"4d8e5d51-f8a7-4106-8af8-821fd2e0dd5a","type":"GlyphRenderer"},{"attributes":{"line_width":{"value":2},"x0":{"field":"x0s"},"x1":{"field":"x1s"},"y0":{"field":"y0s"},"y1":{"field":"y1s"}},"id":"60e16602-44a4-4cb1-93e5-d7d9b1f6b259","type":"Segment"},{"attributes":{"plot":{"id":"cb6ecc17-5278-40fe-81e9-4099ec80d448","subtype":"Chart","type":"Plot"}},"id":"25b16c6c-d7ab-4ec9-9122-5144fd188c54","type":"SaveTool"},{"attributes":{"line_width":{"value":2},"x0":{"field":"x0s"},"x1":{"field":"x1s"},"y0":{"field":"y0s"},"y1":{"field":"y1s"}},"id":"2eff531c-fd2f-4b20-99d3-312545b526d8","type":"Segment"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":3}],"color":["DimGrey"],"cyl":[3],"fill_alpha":[0.8],"height":[1.5],"label":[{"cyl":3}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["3"],"y":[19.5]}},"id":"f39673d3-aaf1-4ca4-9405-248749882100","type":"ColumnDataSource"},{"attributes":{"line_width":{"value":2},"x0":{"field":"x0s"},"x1":{"field":"x1s"},"y0":{"field":"y0s"},"y1":{"field":"y1s"}},"id":"51eb1057-9e79-44a0-83ee-bd0883d82478","type":"Segment"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"332e83bf-badc-4ddb-b4f4-5b9ba81ade9b","type":"Rect"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1d4bc29c-0dc2-4035-b7a7-600d12c6a6d3","type":"Rect"},{"attributes":{"callback":null,"column_names":["x0s","y0s","x1s","y1s"],"data":{"chart_index":[{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4}],"cyl":[4,4,4,4],"x0s":["4:0.5","4:0.65","4:0.5","4:0.65"],"x1s":["4:0.5","4:0.35","4:0.5","4:0.35"],"y0s":[18.0,18.0,32.95,44.87500000000001],"y1s":[25.0,18.0,44.87500000000001,44.87500000000001]}},"id":"92e73d69-227b-4f8d-8472-94dad249921a","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6}],"cyl":[6,6,6,6,6],"x_values":["6:0.5","6:0.5","6:0.5","6:0.5","6:0.5"],"y_values":[26.8,28.8,32.7,38.0,30.7]}},"id":"e75f3ee8-f686-4e36-ab61-a7a81e5adb9c","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"cb6ecc17-5278-40fe-81e9-4099ec80d448","subtype":"Chart","type":"Plot"}},"id":"726a8ad1-0e0b-4d99-a4dd-b26515969a51","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"d955139d-2687-4a20-a342-caa64eb57b34","type":"Rect"},{"attributes":{"data_source":{"id":"af1b661a-1482-4f28-a386-fd3794dd780d","type":"ColumnDataSource"},"glyph":{"id":"c95e1acd-ae9b-4cca-8d01-cf2753683561","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"7f2fdc37-dfa5-4bf7-90ac-0ea2ca83b3b4","type":"GlyphRenderer"},{"attributes":{},"id":"1a806f97-e1df-43a6-81ef-35fb0ce2648f","type":"BasicTicker"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"c95e1acd-ae9b-4cca-8d01-cf2753683561","type":"Rect"},{"attributes":{},"id":"a7b59984-d3ff-4513-880a-d9a5438b330b","type":"CategoricalTicker"},{"attributes":{"below":[{"id":"8701ac98-c5fe-43d9-a7c1-dbda3163a184","type":"CategoricalAxis"}],"height":400,"left":[{"id":"b4f2cf84-75aa-4d09-9d6e-a9ec494daf0d","type":"LinearAxis"}],"renderers":[{"id":"7c719506-36de-4554-8b2a-67712c1f8e26","type":"BoxAnnotation"},{"id":"6ad2ec77-c874-4f6d-a40a-33e9f6e71b93","type":"GlyphRenderer"},{"id":"027581f4-497c-4134-b6ff-4ca8d9c516f7","type":"GlyphRenderer"},{"id":"9526aae6-f67e-4d73-899d-518d8715e6b7","type":"GlyphRenderer"},{"id":"6f4ade22-32fb-4d64-852c-8517aa786359","type":"GlyphRenderer"},{"id":"7f2fdc37-dfa5-4bf7-90ac-0ea2ca83b3b4","type":"GlyphRenderer"},{"id":"64501fcf-7af8-48b6-8cb4-7cae2525fa6e","type":"GlyphRenderer"},{"id":"69e1193f-0342-47e6-963a-0e081ad11bc5","type":"GlyphRenderer"},{"id":"d8ded51f-63ff-4416-99ea-2dfb59da7ecb","type":"GlyphRenderer"},{"id":"7cd72961-db78-41d0-9657-16f00c65d64e","type":"GlyphRenderer"},{"id":"ab7ff62d-663f-4cb3-a309-7ade3b556c6c","type":"GlyphRenderer"},{"id":"c38d36e2-b839-4cc3-814b-e359c4c48198","type":"GlyphRenderer"},{"id":"31a1bb4f-ae4d-40ec-834f-985c4d9d2467","type":"GlyphRenderer"},{"id":"ff7d6a8f-fee8-4332-975e-ca12f36c70f9","type":"GlyphRenderer"},{"id":"4d8e5d51-f8a7-4106-8af8-821fd2e0dd5a","type":"GlyphRenderer"},{"id":"c0f584e6-dd30-49c3-a83f-9d8a168100da","type":"GlyphRenderer"},{"id":"5b5e546f-319d-4659-b76e-f11544f68aa0","type":"GlyphRenderer"},{"id":"3d5055b3-eae7-4cbb-bb89-2ced7c6fe266","type":"GlyphRenderer"},{"id":"a4017354-8dc9-4bed-8991-767f824333be","type":"GlyphRenderer"},{"id":"e8e1ed17-5c8e-4a33-8738-9a6c03a86503","type":"Legend"},{"id":"8701ac98-c5fe-43d9-a7c1-dbda3163a184","type":"CategoricalAxis"},{"id":"b4f2cf84-75aa-4d09-9d6e-a9ec494daf0d","type":"LinearAxis"},{"id":"d0213e66-0921-4834-9157-15271c43293b","type":"Grid"}],"title":{"id":"da89006c-1962-4ca5-8528-c7059b639413","type":"Title"},"tool_events":{"id":"40d87b4d-4052-4a52-8fcb-844b8cfbe9e3","type":"ToolEvents"},"toolbar":{"id":"dbef89da-328e-4d49-9881-f479af787939","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"3f6a3011-f97f-4d9e-9bd4-c0f6f1e340bd","type":"FactorRange"},"y_mapper_type":"auto","y_range":{"id":"f435c5b0-3860-441c-a404-087ec4c57a85","type":"Range1d"}},"id":"cb6ecc17-5278-40fe-81e9-4099ec80d448","subtype":"Chart","type":"Plot"},{"attributes":{"data_source":{"id":"e75f3ee8-f686-4e36-ab61-a7a81e5adb9c","type":"ColumnDataSource"},"glyph":{"id":"93a95d4d-2acf-4465-9371-7a75d7f64c58","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"ff7d6a8f-fee8-4332-975e-ca12f36c70f9","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"924168df-d45a-4ad7-a2a6-38a24b473b11","type":"ColumnDataSource"},"glyph":{"id":"67fc339e-ca9c-45d8-8881-582e7ec980ed","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"64501fcf-7af8-48b6-8cb4-7cae2525fa6e","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"cb6ecc17-5278-40fe-81e9-4099ec80d448","subtype":"Chart","type":"Plot"}},"id":"941f0808-3c11-4177-80d4-3af0c340ecda","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":5},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"67fc339e-ca9c-45d8-8881-582e7ec980ed","type":"Circle"},{"attributes":{"data_source":{"id":"1b7993ed-84ce-40d7-874f-b1f5799f08fa","type":"ColumnDataSource"},"glyph":{"id":"d955139d-2687-4a20-a342-caa64eb57b34","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c38d36e2-b839-4cc3-814b-e359c4c48198","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4de5f1de-f621-422f-af20-b86a52b1cd5b","type":"Rect"}],"root_ids":["cb6ecc17-5278-40fe-81e9-4099ec80d448"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"253d4605-89ed-4c71-babc-99b6d6991108","elementid":"62f3a52c-b116-4ac1-89c8-811512b3a0b6","modelid":"cb6ecc17-5278-40fe-81e9-4099ec80d448"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
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
});