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
      };var element = document.getElementById("f515eee4-e4bd-4320-8173-ae9e2ff3d81b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f515eee4-e4bd-4320-8173-ae9e2ff3d81b' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"0471acfc-193d-4793-905b-fdfca7e6383b":{"roots":{"references":[{"attributes":{"background_fill_color":{"value":"#f0e1d2"},"border_fill_color":{"value":"#f0e1d2"},"min_border":0,"outline_line_color":{"value":"black"},"plot_height":800,"plot_width":800,"renderers":[{"id":"f53ea3d0-35e2-4a8e-9c99-729d12c162a9","type":"BoxAnnotation"},{"id":"6fcb2053-16a3-40d1-a429-5c793b971710","type":"GlyphRenderer"},{"id":"d2c3d165-0674-42c1-92ed-770b4a765a36","type":"GlyphRenderer"},{"id":"8b86a0d1-d216-4094-b0a1-410f36000ffb","type":"GlyphRenderer"},{"id":"d535061e-720d-426e-b09e-c780747e72a2","type":"GlyphRenderer"},{"id":"a0917249-b3e7-4159-ad03-1b75f6c34079","type":"GlyphRenderer"},{"id":"680062ca-6720-45fb-a974-6da877140713","type":"GlyphRenderer"},{"id":"95b00ff3-2948-4732-ba70-2982351cbab7","type":"GlyphRenderer"},{"id":"0ba5fc77-f9a4-46c1-8eef-7cff9489eed4","type":"GlyphRenderer"},{"id":"103f9251-5d82-4ba6-9225-e749d3406685","type":"GlyphRenderer"},{"id":"543725d7-3b94-439a-8bf8-16dfdeb42ebf","type":"GlyphRenderer"},{"id":"5d57327e-314d-4078-9d16-03c4a91ff182","type":"GlyphRenderer"},{"id":"66388fa6-fd32-4448-99fa-f07f8d9ae240","type":"GlyphRenderer"}],"title":{"id":"ffb7f901-dddb-44b4-a4ef-df83dfcd5041","type":"Title"},"tool_events":{"id":"9e612b89-732b-41db-8403-8a4081e37008","type":"ToolEvents"},"toolbar":{"id":"41240a5a-742f-4d55-a8d3-d36c828033d0","type":"Toolbar"},"toolbar_sticky":false,"x_range":{"id":"3535546d-b4b2-4da8-9052-86d52ecffc99","type":"Range1d"},"y_range":{"id":"5830a6c2-b873-4d56-b1da-f96c886f6b8a","type":"Range1d"}},"id":"e1ceb7ad-9fb6-4353-83d1-716123ed868f","subtype":"Figure","type":"Plot"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_color":{"value":"black"},"inner_radius":{"units":"data","value":80},"outer_radius":{"units":"data","value":300},"start_angle":{"field":"start_angle","units":"rad"},"x":{"value":0},"y":{"value":0}},"id":"b5511ac3-7b42-481d-83fa-cf394f69bf87","type":"AnnularWedge"},{"attributes":{"callback":null,"column_names":["y","angle","text","x"],"data":{"angle":[1.2011971910784505,0.831598055362004,0.46199891964555784,0.09239978392911166,-0.2771993517873347,-0.646798487503781,-1.016397623220227,-1.3859967589366735,1.3859967589366735,1.0163976232202274,0.6467984875037809,0.2771993517873348,-0.0923997839291113,-0.4619989196455574,-0.8315980553620044,-1.2011971910784505],"text":["Mycobacterium tuberculosis","Salmonella schottmuelleri","Proteus vulgaris","Klebsiella pneumoniae","Brucella abortus","Pseudomonas aeruginosa","Escherichia coli","Salmonella (Eberthella) typhosa","Aerobacter aerogenes","Brucella antracis","Streptococcus fecalis","Staphylococcus aureus","Staphylococcus albus","Streptococcus hemolyticus","Streptococcus viridans","Diplococcus pneumoniae"],"x":[104.76008319427433,195.3717366575016,259.59735449296807,288.76291112556,278.9294365201175,231.42499591126946,152.66532723443325,53.28736016680539,-53.28736016680535,-152.6653272344331,-231.42499591126946,-278.9294365201175,-288.76291112556004,-259.5973544929681,-195.37173665750157,-104.76008319427436],"y":[270.4169465272632,214.31258599399115,129.2641231751961,26.757824244357604,-79.36226712090402,-174.76404454998436,-246.56296936158805,-285.06219890833154,-285.06219890833154,-246.56296936158816,-174.76404454998436,-79.3622671209041,26.75782424435747,129.26412317519595,214.31258599399118,270.4169465272632]}},"id":"60877728-e382-4d61-b521-f10f64c6f417","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"94fccb64-3f63-4f02-822c-39494c0215e5","type":"ColumnDataSource"},"glyph":{"id":"b5511ac3-7b42-481d-83fa-cf394f69bf87","type":"AnnularWedge"},"hover_glyph":null,"nonselection_glyph":{"id":"11cc020f-064a-41fe-b6b4-bc615719f8a1","type":"AnnularWedge"},"selection_glyph":null},"id":"95b00ff3-2948-4732-ba70-2982351cbab7","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["outer_radius","start_angle","end_angle"],"data":{"end_angle":[1.3331968824057525,0.9635977466893062,0.5939986109728601,0.2243994752564139,-0.1451996604600324,-0.5147987961764788,-0.8843979318929249,-1.2539970676093715,-1.6235962033258176,-1.9931953390422634,-2.3627944747587097,-2.732393610475156,-3.101992746191602,-3.471591881908048,-3.8411910176244954,-4.210790153340941],"outer_radius":[92.23339948031361,139.7867850155062,154.38766386903586,91.62507700950238,168.47495629784697,91.62507700950238,113.85069566245176,168.47495629784697,91.39201867367399,290.0,168.47495629784697,220.2583199527764,246.45224684191624,290.0,253.12378014254972,253.12378014254972],"start_angle":[1.2803970058748317,0.9107978701583854,0.5411987344419392,0.17159959872549302,-0.1979995369909533,-0.5675986727073996,-0.9371978084238457,-1.3067969441402922,-1.6763960798567383,-2.045995215573184,-2.4155943512896307,-2.785193487006077,-3.154792622722523,-3.524391758438969,-3.8939908941554164,-4.263590029871862]}},"id":"456df4b3-86e8-4057-bf46-f10a2cd4d574","type":"ColumnDataSource"},{"attributes":{"fill_color":{"field":"fill_color"},"height":{"units":"data","value":13},"line_color":{"field":"line_color"},"width":{"units":"data","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"4567ea60-017c-4859-9130-81b145611bbc","type":"Rect"},{"attributes":{"callback":null,"column_names":["start_angle","end_angle","line_color","fill_color"],"data":{"end_angle":[1.3859967589366735,1.0163976232202272,0.646798487503781,0.2771993517873348,-0.09239978392911152,-0.46199891964555784,-0.8315980553620039,-1.2011971910784505,-1.5707963267948966,-1.9403954625113427,-2.309994598227789,-2.6795937339442353,-3.0491928696606814,-3.4187920053771275,-3.7883911410935744,-4.15799027681002],"fill_color":["#e69584","#e69584","#e69584","#e69584","#e69584","#e69584","#e69584","#e69584","#e69584","#aeaeb8","#aeaeb8","#aeaeb8","#aeaeb8","#aeaeb8","#aeaeb8","#aeaeb8"],"line_color":["#e69584","#e69584","#e69584","#e69584","#e69584","#e69584","#e69584","#e69584","#e69584","#aeaeb8","#aeaeb8","#aeaeb8","#aeaeb8","#aeaeb8","#aeaeb8","#aeaeb8"],"start_angle":[1.0163976232202272,0.6467984875037809,0.27719935178733474,-0.09239978392911147,-0.4619989196455578,-0.8315980553620042,-1.2011971910784502,-1.5707963267948968,-1.9403954625113429,-2.3099945982277887,-2.6795937339442353,-3.0491928696606814,-3.4187920053771275,-3.7883911410935736,-4.157990276810021,-4.527589412526466]}},"id":"9db463fd-aeca-4cd7-825a-c7559b5e7329","type":"ColumnDataSource"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":90},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"units":"data","value":290},"start_angle":{"field":"start_angle","units":"rad"},"x":{"value":0},"y":{"value":0}},"id":"6dccf9ab-7cd2-4bfa-9149-1c21cea2c9a8","type":"AnnularWedge"},{"attributes":{"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"9pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2c964ece-42f9-4539-90be-5981d2f5fe39","type":"Text"},{"attributes":{"data_source":{"id":"54ccb75e-8755-421f-a290-cb4fd04d679f","type":"ColumnDataSource"},"glyph":{"id":"4567ea60-017c-4859-9130-81b145611bbc","type":"Rect"},"hover_glyph":null,"nonselection_glyph":{"id":"d1787282-32a0-4612-acb6-572ee5ef9c05","type":"Rect"},"selection_glyph":null},"id":"5d57327e-314d-4078-9d16-03c4a91ff182","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y","line_color","fill_color"],"data":{"fill_color":["#0d3362","#c64737","black"],"line_color":["#0d3362","#c64737","black"],"x":[-40,-40,-40],"y":[18,0,-18]}},"id":"54ccb75e-8755-421f-a290-cb4fd04d679f","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"f53ea3d0-35e2-4a8e-9c99-729d12c162a9","type":"BoxAnnotation"},"plot":{"id":"e1ceb7ad-9fb6-4353-83d1-716123ed868f","subtype":"Figure","type":"Plot"}},"id":"2022ddb1-25e3-4cd8-8ce9-fc61e69e0f93","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"42b48943-0bc1-49ba-b2bd-16bffac935cd","type":"ColumnDataSource"},"glyph":{"id":"d108f044-9827-435a-abad-08ef47abb6df","type":"Text"},"hover_glyph":null,"nonselection_glyph":{"id":"b51d8758-b4e3-4b46-b9e1-dfef3d4bc4e9","type":"Text"},"selection_glyph":null},"id":"680062ca-6720-45fb-a974-6da877140713","type":"GlyphRenderer"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_color":{"value":"#c64737"},"inner_radius":{"units":"data","value":90},"line_color":{"value":"#c64737"},"outer_radius":{"field":"outer_radius","units":"data"},"start_angle":{"field":"start_angle","units":"rad"},"x":{"value":0},"y":{"value":0}},"id":"adb1c8af-b0ff-494a-94ae-f73ddb284cab","type":"AnnularWedge"},{"attributes":{"callback":null,"column_names":["y","x","line_color","fill_color"],"data":{"fill_color":["#aeaeb8","#e69584"],"line_color":["#aeaeb8","#e69584"],"x":[-40,-40],"y":[-370,-390]}},"id":"b9a715f5-6f2e-4539-be01-aa0fb794a8d5","type":"ColumnDataSource"},{"attributes":{"text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"9pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"9e31fcb1-2611-4035-a74b-6576c4990c62","type":"Text"},{"attributes":{"plot":{"id":"e1ceb7ad-9fb6-4353-83d1-716123ed868f","subtype":"Figure","type":"Plot"}},"id":"8fad1deb-4a79-4854-aa8c-dfd1bde14fd9","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"a5d5101e-c2f8-4dd7-a309-c985cfe98ae7","type":"Circle"},{"attributes":{"plot":{"id":"e1ceb7ad-9fb6-4353-83d1-716123ed868f","subtype":"Figure","type":"Plot"}},"id":"c11ede59-60f1-4de9-a7de-6240070b99c7","type":"ResetTool"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":90},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"field":"outer_radius","units":"data"},"start_angle":{"field":"start_angle","units":"rad"},"x":{"value":0},"y":{"value":0}},"id":"2ff4a435-7ec8-4582-a44b-f5def772ff49","type":"AnnularWedge"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":90},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"field":"outer_radius","units":"data"},"start_angle":{"field":"start_angle","units":"rad"},"x":{"value":0},"y":{"value":0}},"id":"50938794-f44b-479a-aebe-7171da3c6abc","type":"AnnularWedge"},{"attributes":{"callback":null,"end":420,"start":-420},"id":"5830a6c2-b873-4d56-b1da-f96c886f6b8a","type":"Range1d"},{"attributes":{"callback":null,"column_names":["outer_radius","start_angle","end_angle"],"data":{"end_angle":[1.121997376282069,0.7523982405656227,0.3827991048491765,0.013199969132730319,-0.356399166583716,-0.7259983023001624,-1.0955974380166085,-1.465196573733055,-1.834795709449501,-2.2043948451659467,-2.5739939808823933,-2.9435931165988394,-3.3131922523152855,-3.6827913880317316,-4.052390523748179,-4.421989659464624],"outer_radius":[159.49517010860004,202.64889203801422,201.03749361799578,168.47495629784697,227.18192696067584,180.8815241029378,201.03749361799578,243.8781742537954,162.35069204091852,246.45224684191624,201.03749361799578,290.0,290.0,139.7867850155062,123.8914127986476,139.7867850155062],"start_angle":[1.0691974997511482,0.6995983640347018,0.3299992283182556,-0.039599907398190574,-0.4091990431146369,-0.7787981788310833,-1.1483973145475292,-1.5179964502639758,-1.8875955859804219,-2.2571947216968677,-2.6267938574133143,-2.9963929931297604,-3.3659921288462065,-3.7355912645626526,-4.1051904002791,-4.474789535995545]}},"id":"adc121ad-3b8e-4d81-8856-662f6db1234c","type":"ColumnDataSource"},{"attributes":{"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"7pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"c6e358d1-a9f4-4c17-a8d9-9b82c0f77574","type":"Text"},{"attributes":{"callback":null,"column_names":["y","text"],"data":{"text":["0.001","0.01","0.1","1.0","10.0","100.0"],"y":[290.0,239.66267873058516,201.03749361799578,168.47495629784697,139.7867850155062,113.85069566245176]}},"id":"42b48943-0bc1-49ba-b2bd-16bffac935cd","type":"ColumnDataSource"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":80},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"units":"data","value":300},"start_angle":{"field":"start_angle","units":"rad"},"x":{"value":0},"y":{"value":0}},"id":"11cc020f-064a-41fe-b6b4-bc615719f8a1","type":"AnnularWedge"},{"attributes":{},"id":"9e612b89-732b-41db-8403-8a4081e37008","type":"ToolEvents"},{"attributes":{"angle":{"field":"angle","units":"rad"},"text_align":"center","text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"9pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"bf23f28a-26ea-46e3-841c-896fb57e0525","type":"Text"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"field":"radius","units":"data"},"x":{"value":0},"y":{"value":0}},"id":"e5d742cc-6b3b-42f5-a277-c168f7bd84e2","type":"Circle"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_color":{"field":"fill_color"},"inner_radius":{"units":"data","value":90},"line_color":{"field":"line_color"},"outer_radius":{"units":"data","value":290},"start_angle":{"field":"start_angle","units":"rad"},"x":{"value":0},"y":{"value":0}},"id":"f9c37cf4-5651-4b47-b35e-eafecfb07e6c","type":"AnnularWedge"},{"attributes":{"data_source":{"id":"60877728-e382-4d61-b521-f10f64c6f417","type":"ColumnDataSource"},"glyph":{"id":"5cf77dbd-14e1-4ef8-b36b-f5a6f8ab5271","type":"Text"},"hover_glyph":null,"nonselection_glyph":{"id":"bf23f28a-26ea-46e3-841c-896fb57e0525","type":"Text"},"selection_glyph":null},"id":"0ba5fc77-f9a4-46c1-8eef-7cff9489eed4","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":""},"id":"ffb7f901-dddb-44b4-a4ef-df83dfcd5041","type":"Title"},{"attributes":{"fill_color":{"field":"fill_color"},"line_color":{"field":"line_color"},"radius":{"units":"data","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"c55fcb92-bb5b-4bb5-9d1f-68eeec4315b7","type":"Circle"},{"attributes":{"data_source":{"id":"61b767ae-6506-4396-a2cb-c114cb65ab52","type":"ColumnDataSource"},"glyph":{"id":"2c964ece-42f9-4539-90be-5981d2f5fe39","type":"Text"},"hover_glyph":null,"nonselection_glyph":{"id":"9e31fcb1-2611-4035-a74b-6576c4990c62","type":"Text"},"selection_glyph":null},"id":"66388fa6-fd32-4448-99fa-f07f8d9ae240","type":"GlyphRenderer"},{"attributes":{"angle":{"field":"angle","units":"rad"},"text_align":"center","text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"9pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5cf77dbd-14e1-4ef8-b36b-f5a6f8ab5271","type":"Text"},{"attributes":{"data_source":{"id":"e1b15723-c449-4639-a53f-f46a585bb40c","type":"ColumnDataSource"},"glyph":{"id":"c6e358d1-a9f4-4c17-a8d9-9b82c0f77574","type":"Text"},"hover_glyph":null,"nonselection_glyph":{"id":"acbd8859-9e3a-4af0-b755-965242cdb9a0","type":"Text"},"selection_glyph":null},"id":"543725d7-3b94-439a-8bf8-16dfdeb42ebf","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["outer_radius","start_angle","end_angle"],"data":{"end_angle":[1.2275971293439107,0.8579979936274644,0.48839885791101834,0.1187997221945721,-0.2507994135218742,-0.6203985492383206,-0.9899976849547667,-1.3595968206712132,-1.7291959563876593,-2.098795092104105,-2.4683942278205517,-2.837993363536998,-3.207592499253444,-3.57719163496989,-3.9467907706863374,-4.316389906402782],"outer_radius":[148.09389702866355,171.43725698767838,201.03749361799578,166.08111883679086,159.49517010860004,159.49517010860004,180.8815241029378,180.8815241029378,168.47495629784697,239.66267873058516,168.47495629784697,220.2583199527764,201.03749361799578,135.84452353427264,139.7867850155062,138.66430573015015],"start_angle":[1.17479725281299,0.8051981170965435,0.43559898138009745,0.06599984566365122,-0.30359929005279507,-0.6731984257692415,-1.0427975614856875,-1.412396697202134,-1.78199583291858,-2.151594968635026,-2.5211941043514727,-2.890793240067919,-3.260392375784365,-3.629991511500811,-3.9995906472172584,-4.369189782933703]}},"id":"5c57a8c1-7825-4b38-9857-038b1c8c75a2","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["radius"],"data":{"radius":[290.0,239.66267873058516,201.03749361799578,168.47495629784697,139.7867850155062,113.85069566245176,90.0]}},"id":"af53e702-8352-404d-bf2c-4b1cc1cc5ab7","type":"ColumnDataSource"},{"attributes":{"text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"7pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"acbd8859-9e3a-4af0-b755-965242cdb9a0","type":"Text"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"white"},"radius":{"field":"radius","units":"data"},"x":{"value":0},"y":{"value":0}},"id":"702e42af-b562-441d-8a65-5eaf35a675a0","type":"Circle"},{"attributes":{"data_source":{"id":"9db463fd-aeca-4cd7-825a-c7559b5e7329","type":"ColumnDataSource"},"glyph":{"id":"f9c37cf4-5651-4b47-b35e-eafecfb07e6c","type":"AnnularWedge"},"hover_glyph":null,"nonselection_glyph":{"id":"6dccf9ab-7cd2-4bfa-9149-1c21cea2c9a8","type":"AnnularWedge"},"selection_glyph":null},"id":"6fcb2053-16a3-40d1-a429-5c793b971710","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"adc121ad-3b8e-4d81-8856-662f6db1234c","type":"ColumnDataSource"},"glyph":{"id":"15209a03-29d8-4f1a-b4cf-56220dead768","type":"AnnularWedge"},"hover_glyph":null,"nonselection_glyph":{"id":"2ff4a435-7ec8-4582-a44b-f5def772ff49","type":"AnnularWedge"},"selection_glyph":null},"id":"d535061e-720d-426e-b09e-c780747e72a2","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"e1ceb7ad-9fb6-4353-83d1-716123ed868f","subtype":"Figure","type":"Plot"}},"id":"68303fec-8eb3-4aae-a3ae-4e117119797d","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":13},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"d1787282-32a0-4612-acb6-572ee5ef9c05","type":"Rect"},{"attributes":{"data_source":{"id":"5c57a8c1-7825-4b38-9857-038b1c8c75a2","type":"ColumnDataSource"},"glyph":{"id":"adb1c8af-b0ff-494a-94ae-f73ddb284cab","type":"AnnularWedge"},"hover_glyph":null,"nonselection_glyph":{"id":"a746d430-a60e-43c8-bfa5-c50e973844f3","type":"AnnularWedge"},"selection_glyph":null},"id":"8b86a0d1-d216-4094-b0a1-410f36000ffb","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"456df4b3-86e8-4057-bf46-f10a2cd4d574","type":"ColumnDataSource"},"glyph":{"id":"24396f6e-a504-4311-8d80-7ed1daa05aa1","type":"AnnularWedge"},"hover_glyph":null,"nonselection_glyph":{"id":"50938794-f44b-479a-aebe-7171da3c6abc","type":"AnnularWedge"},"selection_glyph":null},"id":"d2c3d165-0674-42c1-92ed-770b4a765a36","type":"GlyphRenderer"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"8pt"},"x":{"value":0},"y":{"field":"y"}},"id":"b51d8758-b4e3-4b46-b9e1-dfef3d4bc4e9","type":"Text"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"6768051a-31a4-4dde-9767-0d7bd164451c","type":"PanTool"},{"id":"8fad1deb-4a79-4854-aa8c-dfd1bde14fd9","type":"WheelZoomTool"},{"id":"2022ddb1-25e3-4cd8-8ce9-fc61e69e0f93","type":"BoxZoomTool"},{"id":"68303fec-8eb3-4aae-a3ae-4e117119797d","type":"SaveTool"},{"id":"c11ede59-60f1-4de9-a7de-6240070b99c7","type":"ResetTool"},{"id":"c8b02afc-0eb5-4045-9836-bed8416a9539","type":"HelpTool"}]},"id":"41240a5a-742f-4d55-a8d3-d36c828033d0","type":"Toolbar"},{"attributes":{"plot":{"id":"e1ceb7ad-9fb6-4353-83d1-716123ed868f","subtype":"Figure","type":"Plot"}},"id":"6768051a-31a4-4dde-9767-0d7bd164451c","type":"PanTool"},{"attributes":{"callback":null,"column_names":["y","x","text"],"data":{"text":["Gram-positive","Gram-negative"],"x":[-30,-30],"y":[-370,-390]}},"id":"e1b15723-c449-4639-a53f-f46a585bb40c","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"e1ceb7ad-9fb6-4353-83d1-716123ed868f","subtype":"Figure","type":"Plot"}},"id":"c8b02afc-0eb5-4045-9836-bed8416a9539","type":"HelpTool"},{"attributes":{"data_source":{"id":"af53e702-8352-404d-bf2c-4b1cc1cc5ab7","type":"ColumnDataSource"},"glyph":{"id":"702e42af-b562-441d-8a65-5eaf35a675a0","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"e5d742cc-6b3b-42f5-a277-c168f7bd84e2","type":"Circle"},"selection_glyph":null},"id":"a0917249-b3e7-4159-ad03-1b75f6c34079","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"f53ea3d0-35e2-4a8e-9c99-729d12c162a9","type":"BoxAnnotation"},{"attributes":{"callback":null,"end":420,"start":-420},"id":"3535546d-b4b2-4da8-9052-86d52ecffc99","type":"Range1d"},{"attributes":{"callback":null,"column_names":["start_angle","end_angle"],"data":{"end_angle":[1.0163976232202272,0.6467984875037809,0.27719935178733474,-0.09239978392911147,-0.4619989196455578,-0.8315980553620042,-1.2011971910784502,-1.5707963267948968,-1.9403954625113429,-2.3099945982277887,-2.6795937339442353,-3.0491928696606814,-3.4187920053771275,-3.7883911410935736,-4.157990276810021,-4.527589412526466],"start_angle":[1.0163976232202272,0.6467984875037809,0.27719935178733474,-0.09239978392911147,-0.4619989196455578,-0.8315980553620042,-1.2011971910784502,-1.5707963267948968,-1.9403954625113429,-2.3099945982277887,-2.6795937339442353,-3.0491928696606814,-3.4187920053771275,-3.7883911410935736,-4.157990276810021,-4.527589412526466]}},"id":"94fccb64-3f63-4f02-822c-39494c0215e5","type":"ColumnDataSource"},{"attributes":{"text_align":"center","text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"8pt"},"x":{"value":0},"y":{"field":"y"}},"id":"d108f044-9827-435a-abad-08ef47abb6df","type":"Text"},{"attributes":{"callback":null,"column_names":["y","x","text"],"data":{"text":["Penicillin","Streptomycin","Neomycin"],"x":[-15,-15,-15],"y":[18,0,-18]}},"id":"61b767ae-6506-4396-a2cb-c114cb65ab52","type":"ColumnDataSource"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_color":{"value":"black"},"inner_radius":{"units":"data","value":90},"outer_radius":{"field":"outer_radius","units":"data"},"start_angle":{"field":"start_angle","units":"rad"},"x":{"value":0},"y":{"value":0}},"id":"15209a03-29d8-4f1a-b4cf-56220dead768","type":"AnnularWedge"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":90},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"field":"outer_radius","units":"data"},"start_angle":{"field":"start_angle","units":"rad"},"x":{"value":0},"y":{"value":0}},"id":"a746d430-a60e-43c8-bfa5-c50e973844f3","type":"AnnularWedge"},{"attributes":{"data_source":{"id":"b9a715f5-6f2e-4539-be01-aa0fb794a8d5","type":"ColumnDataSource"},"glyph":{"id":"c55fcb92-bb5b-4bb5-9d1f-68eeec4315b7","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"a5d5101e-c2f8-4dd7-a309-c985cfe98ae7","type":"Circle"},"selection_glyph":null},"id":"103f9251-5d82-4ba6-9225-e749d3406685","type":"GlyphRenderer"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_color":{"value":"#0d3362"},"inner_radius":{"units":"data","value":90},"line_color":{"value":"#0d3362"},"outer_radius":{"field":"outer_radius","units":"data"},"start_angle":{"field":"start_angle","units":"rad"},"x":{"value":0},"y":{"value":0}},"id":"24396f6e-a504-4311-8d80-7ed1daa05aa1","type":"AnnularWedge"}],"root_ids":["e1ceb7ad-9fb6-4353-83d1-716123ed868f"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"0471acfc-193d-4793-905b-fdfca7e6383b","elementid":"f515eee4-e4bd-4320-8173-ae9e2ff3d81b","modelid":"e1ceb7ad-9fb6-4353-83d1-716123ed868f"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
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